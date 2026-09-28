🧙🧙🧙🧙🧙🧙🧙🧙🧙🧙
ちぇぶちぇぶしてきたーーーー

魔法陣を書いて魔法を放とう！

魔法を放つデモ！
https://youtube.com/shorts/WJdobjaw30w

## 使用技術

Unity 6000.3.10f1
`あなたもUnity最高と言いなさい`

```
// [Unity開発 AI支援]
// UnityMCP
"com.unity.ai.assistant": "2.1.0-pre.1"
// unityのcliツール
"com.yucchiy.unicli-server": "https://github.com/yucchiy/UniCli.git?path=src/UniCli.Unity/Packages/com.yucchiy.unicli-server#v1.2.0"

// [マルチプレイ]
"com.unity.services.lobby": "1.2.2"                
"com.unity.services.multiplayer": "2.1.3"
"com.unity.services.relay": "1.1.1"
"com.unity.netcode.gameobjects": "2.10.0"

// [XR]
"com.unity.xr.openxr": "1.16.1"
```

## タイトル画面の実装

### 実装したこと
- 星空背景
- 魔法陣とタイトルテキストの召喚
- オーブを掴むことでゲームスタート



---

### 星空背景

`StarfieldController.cs`で実装しました。

- `Random.onUnitSphere`で球面上にランダムに星を配置
- 星の数は200個、サイズもランダムで大小バラバラに
- 星空全体がゆっくり回転するので、眺めているだけで雰囲気が出ます

```csharp
Vector3 pos = Random.onUnitSphere * spawnRadius;
GameObject star = Instantiate(starPrefab, pos, Quaternion.identity, transform);
```

---

### 魔法陣とタイトルテキストの召喚

`MagicCircleController.cs`で実装しました。

- コントローラーを初期位置から1.0m以上動かすと魔法陣が召喚される
- 魔法陣はスケール0から1にアニメーションしながら展開
- 展開完了後にタイトルテキストと魔法のオーブが出現

```csharp
float maxDist = Mathf.Max(leftDist, rightDist);
if (maxDist >= activationDistance)
    StartCoroutine(SummonCircle());
```

アニメーションはEaseOut（最初速く、最後ゆっくり止まる）を自前で実装しました。

```csharp
float EaseOut(float t) => 1f - Mathf.Pow(1f - t, 3f);
```

---

### オーブを掴むことでゲームスタート

- 魔法陣召喚後、中心に魔法のオーブが出現
- コントローラーがオーブに近づいた状態でグリップを握るとゲームスタート
- グリップ入力はXR Input Systemの`InputActionProperty`で取得しています

```csharp
bool leftNear = Vector3.Distance(
    leftControllerTransform.position,
    centerStar.transform.position
) < grabRadius;

bool leftGrip = leftGripAction.action.ReadValue<float>() > 0.5f;

if ((leftNear && leftGrip) || (rightNear && rightGrip))
    sceneManager.OnGameStart();
```

エディター上でのデバッグ用にキーボードの`G`キーでもスタートできるようにしてあります。

---

### 推しポイント
普通にボタンを押してスタートは面白くないので、自分が魔法使いになる入口をイメージして、タイトルのシーンを作りました！

---

## ゲーム画面の実装

### 実装したこと
- 魔法陣を描く機能
- 画像認識
- 敵の生成アルゴリズム

## 魔法陣を描く機能

unityのline Rendererを使用しました。
line Rendererに座標を入力すると、自動で線を書いてくれるので、コントローラの位置をトラッキングして渡している。
## PDoller Point-Cloud Recognizer

図形の頂点のx座標yと座標、時間と筆圧をまとめたxmlファイルを読み取り、書いた魔法陣と元の図形との差から魔法の発生の判断をしている。

## 敵の生成アルゴリズム
円形状にランダムに生成するアルゴリズムを作成しました。
Croutineを使ってプレイ中のみ繰り返し実行するようにしている。

IEnumerator EnemyInstantiater()
{
    while (enemyNumber < limitEnemy && spawnNumber < limitEnemy + 5)
    {
        yield return new WaitForSeconds(interval);

        float angle = Random.Range(0, 360);
        float rad = angle * Mathf.Deg2Rad;

        float rx = Mathf.Cos(rad);
        float ry = Mathf.Sin(rad);

        Instantiate(enemy, new Vector3(rx * 8, 4, ry * 8), Quaternion.identity);

        spawnNumber++;
    }
}
0から360の乱数をラジアンに変換し、cos,sinに変換したものを生成位置にすることによって円形状にランダムに生成している。 

---

## GUIがなくても戦えるUnity！

某先輩🐉 『Unityはくそ() GUIつらいよ〜😭』

GUIを覚えるのは大変！
特にUnityは覚えることが多すぎてつらいです

最近はAIAgentの発達でMCPやCLIの需要が高まっていますが、ついにいろいろ登場してアツそうなので使って見てます

![image](https://ptera-publish.topaz.dev/project/01KM0J8MAWCFZJT3R1YPTMJNH2.png)

[公式MCPの記事](https://docs.unity3d.com/Packages/com.unity.ai.assistant@2.0/manual/unity-mcp-overview.htmlk)
[UnityMCP使ってみた記事](https://note.com/npaka/n/n19e5132847c6)
[UniCli](https://github.com/yucchiy/UniCli)

## デプロイ

MetaQuestってAndroidなんだなぁ...

自動デプロイ環境を作成する気力が足りなかったので`deplpy.sh`を作って「ローカルでAndroidビルド」→「itch.ioにそれ用のcli(butler)でデプロイ」
しました

ユーザーはそこから`.apk`をダウンロードして動かしてもらいます！

![image](https://ptera-publish.topaz.dev/project/01KM290808AVYK3FSWKG20NTHP.png)

## マルチプレイ（機能はあるヨ）

 Netcode for GameObjects (NGO)とUnity Gaming Services （UGS）のRelayとLobbyを使用して実装しました

https://github.com/jyogi-web/Megaro_ChebuWarts/issues/9

敵の生成をして相手を邪魔するゲームにしてます

下の画面の左がVR側の人で右が参加者側です
画面のタップしたところにモンスターが生成されます

![image](https://ptera-publish.topaz.dev/project/01KM2AN5TQRSNNP08KRXHACFM1.png)

デバッグにMultiplayerを使用することで一人で複数人のデバッグが可能になって嬉しいですね😎

![image](https://ptera-publish.topaz.dev/project/01KM2ASSEG1SRD8CSE9M2F8P3Q.png)

![image](https://ptera-publish.topaz.dev/project/01KM2ASW9MNRHCB3T9PC34JR58.png)