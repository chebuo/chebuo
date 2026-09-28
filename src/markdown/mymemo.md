# たくさん！かくさん！Mymemoとは

技術記事を読んで実践したとき、その記事が使えなかったことはありませか？
Mymemoはそんな時にメモを共有してみんなに知らせるだけでなく、他のユーザーのメモを参照することにより、早期に参考にしていた技術記事に見切りをつけることができます
知識のアウトプットにもなることを目指して開発したプロダクトです。

# アーキテクチャ図
![image](https://ptera-publish.topaz.dev/project/01KHQKNF7D3E36PM4AMNWTYQY7.jpeg)

## 技術スタック
| レイヤー | 技術 |
|--------|------|
| フロントエンド | React 19.2.0 + Vite 7.3.1 |
| DnD | @dnd-kit/core 6.3.1, @dnd-kit/sortable 10.0.0 |
| バックエンド | Cloudflare Workers |
| DB | Supabase (PostgreSQL) |
| デプロイ | Render.com |
| 配布形式 | Chrome Extension (Manifest V3) |

## 完成度 (B)

実装済み機能:
- URL紐づきメモの作成・編集・削除
- ページ上への付箋表示（ドラッグ移動・リサイズ）
- お絵描きキャンバスメモ
- ドラッグ&ドロップによる並び替え
- タグ管理
- ローカル全文検索（テキスト・タグ）
- リモートへのメモ共有
- リモートメモ一覧・キーワード検索
- マイページ（ユーザー登録・ログイン・メモ統計）
- メモのカラー変更

# 機能説明

**・メモ保存機能**
書いたメモはchrome.storage.localというChrome拡張機能専用のストレージAPIで保存されているため、高速で読み込み可能

メモの保存はcloudflare Workers経由で Supabase に書き込みます。画像データは GCS にアップロードし、そのURLをDBに格納します。

```js
// Cloudflare Workers (backend)
if (path === "/memos" && request.method === "POST") {
  const { url: memoUrl, text, user_id } = await request.json();
  const { data, error } = await supabase
    .from("memos")
    .insert([{ url: memoUrl, text, user_id }])
    .select();
  if (error) return json({ error: error.message }, 500);
  return json(data[0]);
}
```

---

**・メモ貼付機能**
書いたメモをサイトのどこにでも張ることが可能。貼付したメモはサイズの変更や削除、非表示、内容の編集を直接できます。

content scriptからバニラJSでDOM要素を生成してページに注入し、マウスイベントでドラッグ移動を実装しています。

```tsx
// content.js（ページへの注入）
const MemoUpdate = (allMemos) => {
  document.querySelectorAll('.page-memo').forEach(e => e.remove());
  const memos = (allMemos || []).filter(memo => memo.url === location.href);

  memos.forEach((memo, i) => {
    if (!memo.pasted) return;
    const div = document.createElement('div');
    Object.assign(div.style, {
      position: 'absolute',
      top: `${memo.y ?? (120 + i * 80)}px`,
      left: `${memo.x ?? 120}px`,
      background: memo.memoColor || "#fff8b0",
    });
    MemoDrag(header, div, memo);
    document.body.appendChild(div);
  });
};
```

```json
// manifest.json (Manifest V3)
{
  "manifest_version": 3,
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content.js"]
  }]
}
```

---

**・メモ共有機能**
書いたメモをほかの人が見られるように共有することができます。

共有ボタン押下時にWorkerのエンドポイントへPOSTし、Supabaseのmemosテーブルに書き込みます。

```js
// 共有ボタン押下時
const shareMemo = async () => {
  const payload = { url: currentUrl, text, user_id: userId };
  await fetch(`${API_BASE}/memos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};
```

---

**・タグ＆メモ検索機能**
メモにはタグを追加することが可能。検索機能ではタグや本文、またはその両方からメモの検索が可能。ほかの人が書いたメモも検索可能であり、メモからサイトへアクセスすることができます。

ローカル検索はメモリ上でフィルタリング、リモート検索は Supabase の `ilike` と配列演算子を使用します。

```ts
// ローカル全文検索
function searchLocal(memos: Memo[], query: string, tags: string[]) {
  return memos.filter(m => {
    const matchText = m.content.toLowerCase().includes(query.toLowerCase());
    const matchTag  = tags.length === 0 || tags.every(t => m.tags.includes(t));
    return matchText && matchTag;
  });
}

// リモート検索（公開メモ）
async function searchRemote(query: string, tag: string) {
  const { data } = await supabase
    .from('memos')
    .select('*')
    .eq('is_public', true)
    .ilike('content', `%${query}%`)
    .contains('tags', tag ? [tag] : []);
  return data;
}
```

---

**・いいね機能**
メモにはいいねをすることができ、有益な情報にいいねを付けて後から見返すことが可能です。

いいねはmemosテーブルのgoodカラムをインクリメントして管理しています。

```ts
// Cloudflare Workers - いいね処理
const { data } = await supabase
  .from("memos")
  .select("good")
  .eq("id", id)
  .single();

const newGood = (data.good || 0) + 1;
await supabase
  .from("memos")
  .update({ good: newGood })
  .eq("id", id);
```

---


お絵かき機能ではキャンバスを設置して好きなものを書くことができます

Canvas API でマウスの軌跡を描画し、`toDataURL()` で画像として保存します。


```tsx
function DrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

  const startDraw = (e: React.MouseEvent) => {
    drawing.current = true;
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e: React.MouseEvent) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const save = () => {
    const dataUrl = canvasRef.current!.toDataURL('image/png');
    // dataUrl を GCS にアップロードして保存
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDraw}
      onMouseMove={draw}
      onMouseUp={() => (drawing.current = false)}
    />
  );
}
```

---

**・マイページ機能**
このページでは自身が保存したメモとそのURLを閲覧することができます

ログインユーザーのメモ一覧と統計（総数・公開数・いいね数）を取得して表示します。

```ts
// マイページデータ取得
const res = await fetch(`${API_BASE}/memos?user_id=${userId}`);
const userMemos = await res.json();

const stats = {
  total:      userMemos.length,
  totalLikes: userMemos.reduce((sum, m) => sum + (m.good || 0), 0),
};
```

---

# 推しポイント
chromeの拡張機能で使えるためブラウザのタブを増やすことなくサイトの評価を見ることができる！

マイページにて過去自分が保存したメモと紐づけされたURLを確認できるため、開発中にメモを保存しておくことで後から有用だったサイトを共有しようとしたときにマイページを見るだけで当時参考にしていたサイトが分かる。

つまりchromeのブックマーク機能＋メモでサイトを探すのが楽だしあとから見直したときに楽ができる

# 大変だったところ
事前開発をしている段階でメインで開発を進めている人が風邪で4日ダウンしてしまった

バックエンドデプロイする用のRenderが一生動かなくて二日ぐらいバックの開発が止まっていた

（原因は参照するgithubのプロダクトが全く同じ名前のものが二つあり、参照を間違っていた）

そのため毎日22時に進捗報告を行っているが進捗が止まっている情報が出るだけの日があってつらかった

# メイン画面
![image](https://ptera-publish.topaz.dev/project/01KJG27FYYJ3SXAXKJZQEYRPE6.png)

# オンライン画面
![image](https://ptera-publish.topaz.dev/project/01KJG2A52YR4QK67YESQR1XDM5.png)

# 検索画面
![image](https://ptera-publish.topaz.dev/project/01KJG2DX7WHMENGHQD2FBJW20R.png)

# マイページ
![image](https://ptera-publish.topaz.dev/project/01KJG2GS14BRFQYJH3CYVK35G3.png)

# お絵かき
![image](https://ptera-publish.topaz.dev/project/01KHQSX6ZK1MVF33194HNV23HP.png)