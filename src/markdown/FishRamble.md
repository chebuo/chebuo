## 概要
スマホをコントローラーとして使用するマルチプレイヤーカヤックゲーム。

3人1チームの釣りバトル(物理)！
スマホを振って操作しよう！

### ゲームプレイ

1. QRコードでスマホをUnityクライアントに接続
2. 釣りで魚を釣る
3. 釣った魚を振り回して相手チームにぶつける
4. 相手チームのHPを0にしたら勝ち

### [FishRumble!! デモ動画](https://youtube.com/playlist?list=PLSVfO8vxAfZ8EvBENq97q13kp3ouoqIFD&si=Aukhq09cS4l5DHKa)

### チーム構成と役割
![image](https://ptera-publish.topaz.dev/project/01KVJQ246S28ZYZ36JGMZAMCRK.png)

### ゲームモード

- **single**: 1チーム3人
- **versus**: 2チーム3vs3

## 背景
Unityゲームを作るために集まったチームなのでゴリゴリUnity技術を用いています。
また、スマホをコントローラーにしてみんなで遊べるゲームを作りたかったのでこのようなゲームになりました。

## 技術スタック
デプロイ先：Render（コントローラーアプリ＋中継サーバー）
![image](https://ptera-publish.topaz.dev/project/01KVJSHECG307DBF48187VMBMF.png)
![image](https://ptera-publish.topaz.dev/project/01KVJSHJYCHKRQ162P6E58N9Z7.png)
ちゃんとCIを回しながら開発！

## アーキテクチャ
![image](https://ptera-publish.topaz.dev/project/01KVJYDMXKHXGBMDQX8VBT4K29.png)

- **通信方式**: Socket.IOによる双方向リアルタイム通信
- **リアルタイム通信**: Socket.IO 4.8.3
- **ルーム管理**: サーバーがインメモリで管理、ホスト切断時に自動削除

## 通信フロー
![image](https://ptera-publish.topaz.dev/project/01KVJYC47Q21AFPGCFYTXWGHQH.png)

## 推し技術・推しポイント

###  Next.js カスタムサーバー構成
 Next.jsのデフォルトサーバーではWebSocketが使えないため、http.Server + Socket.IOを統合したカスタムサーバーを構築しました。
これによりサーバー1つだけでUI配信 + リアルタイム通信を実現！

### インメモリ（ルーム・プレイヤー管理）

#### 推しポイント: データベース不要。Mapで軽量に管理。
データベースを使わず、サーバーメモリ上の Map<string, RoomState> , Map<string, PlayerData>,だけで管理しているため、読み書きが爆速！
ルームが消えればプレイヤー情報も自動消滅するので、ゴミデータが残らない！
```
interface RoomState {
  roomId: string;        // 6文字英数字（I/O/0/1除外）
  hostId: string;        // Unityのsocket.id
  gameMode: "single" | "versus";
  players: Map<string, PlayerData>;  // socket.id → { role, team }
}
```
- 自動クリーンアップ — ホスト切断時にルーム自動削除（ゴーストルーム防止）
- 役割占有管理 — チーム内で同じ役割は1デバイスのみ
- 切断時の自動解放 — プレイヤーがブラウザを閉じるだけで役割が空き、別の人がすぐに取れる
- リアルタイム同期 — スマホ側で誰が何の役割を取っているかが常に最新に保たれる

### Socket.IO便利

- WebSocket + HTTPロングポーリングの自動フォールバック
（WebSocketが通らない環境では、自動的にHTTPロングポーリングに切り替わってくれる）
- 再接続機能 — ネットワークが不安定な環境でも自動リトライ（最大10回、1秒〜5秒間隔）
- ルーム機能 — io.to("room:xxx").emit() で同一ルームのみに配信

### UniQRCode
Unity上で文字列→QRコードのTexture2Dを生成
ルームID入力不要でUX向上！スマホでQRコードをスキャンするだけでルーム参加が可能！

### UniTask

実際の現場でも使われている非同期処理のライブラリ

### Active Ragdoll

アニメーションをキーフレームではなく物理挙動で行う機能。
毎回違うアニメーションが再生される。![image](https://ptera-publish.topaz.dev/project/01KVMCP3DFVY7V8YM5D5XC7MK4.png)
一つ一つのボーンに当たり判定とRigidBodyを追加する手法です。
![image](https://ptera-publish.topaz.dev/project/01KVMCS21E8GTZWERN7X5VCT03.png)
荒ぶったり、かな〜り厄介ですが頑張りました。

### Shader Graph

下の画像の海を作成するのに使った。ベースカラーとノーマルマップをノードベースで加工している。
![image](https://ptera-publish.topaz.dev/project/01KVKP93H7FNFSAJJ3YZNDGYPE.png)

ベースカラーは以下のようになっている。
上の部分でカメラからの奥行きを取得して、近くの部分を反射しないようにしていて、下の部分で10倍にした画像を水色と白で2値化している。
![image](https://ptera-publish.topaz.dev/project/01KVKPSNQEY9DJ66F2CAHYAC8K.png)

ノーマルマップは以下のようになっている。
上の2つで画像を10倍にして、下の部分で斜めに動かしている。
![image](https://ptera-publish.topaz.dev/project/01KVKQGQPPHVVN4E67G0ZH28ZZ.png)

それ以外に座標もアニメーションするようにしている。
ポジションのY軸のみをsin関数を使って上下に移動するようにしている。これで潮の満ち引きを再現している。
![image](https://ptera-publish.topaz.dev/project/01KVKQX8MR4MWVVQNHCCKJS13D.png)

### Visual Effect Graph (VFX)

VFXでは波しぶきと航跡波と釣りポイントエリアを作成した。

下の画像は航跡波の生成頻度と速度の計算をしている。
船のオブジェクトの速度をBlackBoardを使って取得した。その速度を使って正と負を繰り返す値と速度調整、制限をしている。
![image](https://ptera-publish.topaz.dev/project/01KVKSWBGYPRMSSCFZ7RBQPC48.png)

### OutLine (輪郭線)

3Dモデルの輪郭線はバックフェイスカリングを用いて実装している。バックフェイスカリングとはポリゴンの裏側を描画しない機能のこと。
通常のモデルとポリゴンの裏側を表にした一回り大きいモデルを用意する。
これによって、輪郭線を作ることができた。
![image](https://ptera-publish.topaz.dev/project/01KVKTTD00H5PWRRD791QWRC1N.png)


## ドキュメント
アーキテクチャやシーケンス、仕様書など今回の開発でまとめたドキュメント達。詳しい設計や仕様はこちらから！
開発初期段階の企画書や実装計画についてまとめたドキュメントなども置いています。

- [ゲームデザイン](https://github.com/guriguri00451/alounity/blob/dev/docs/01_GameDesign.md)
- [技術標準](https://github.com/guriguri00451/alounity/blob/dev/docs/02_TechStandard.md)
- [アーキテクチャ](https://github.com/guriguri00451/alounity/blob/dev/docs/03_Architecture.md)
- [コントローラー仕様書](https://github.com/guriguri00451/alounity/blob/dev/docs/controller-implementation-plan.md)
- [QRコード実装](https://github.com/guriguri00451/alounity/blob/dev/docs/qr-code-implementation.md)

## 開発メンバー
そーま：Unity側ゲームロジック担当
chebuo：3Dモデル作成、パーティクル、シェーダー担当
リタ：スマホコントローラー実装、websocket通信周り担当