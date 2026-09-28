# 【アプリ概要】
３D野球盤をweb上でできます。
ホーム画面の設定からジョイコン接続。
現状の実装だとピッチングマシンを打ってゲームをする感じになってます
点数処理を行えています

# 完成品

[デモ動画]()

[VRデモ動画](https://youtu.be/VpiNGCYvGTU)

[Joyconデモ](https://youtube.com/shorts/AK-Fc8XVjXg?feature=share)

[キャラモデルアップロードデモ](https://youtu.be/D_hZHtvI1bU)

# 使用技術

```
    "next": "15.5.0",
    "react": "19.1.0",
    "@react-three/drei": "^10.7.4",
    "@react-three/fiber": "^9.3.0",
    "@react-three/rapier": "^2.1.0",
    "@react-three/xr": "^6.6.25",
    "three": "^0.179.1",
    "zustand": "^5.0.8"
```

## [ReactThreeFiber](https://github.com/pmndrs/react-three-fiber)

ReactThreeFiberとは...
> ReactThreeFiber3Dグラフィックで有名なThree.jsをReactのコンポーネントとして直感的に扱えるようにするラッパーライブラリ

エコシステムがすごくて今回画面操作や物理演算、VR部分などで使用しました

【エコシステム一覧】
![image](https://ptera-publish.topaz.dev/project/01K3T8Q037TBQD7383DBTFNPBR.png)

## ジョイコンの実装

Web-HID-API関係をいじいじして接続
Bluetoothで接続してAボタンを押すことでバットをJoyconを使用して振ることができます    

[Joyconデモ](https://youtube.com/shorts/AK-Fc8XVjXg?feature=share)


## VRの実装

@react-three/xrを使用して実装しました

[VRデモ動画](https://youtu.be/VpiNGCYvGTU)

コントローラーを振って遊べます

## 点数処理

zustandを使用してプレイ中の値を管理しました

![image](https://ptera-publish.topaz.dev/project/01K3T60QYC3ZFKGVX7WB982MSN.png)

## プレイ結果判定
ヒットなのか２ベースヒットなのかホームランなどの判定をチェックする部分に飛距離を参照しています

> 本当は野球盤みたいに特定の場所は3BH・少し横にずれるとOUTみたいにしたかった

## キャラモデルを使用

自前のキャラモデルを使用してプレイする用の機能を実装していましたがまだ本番にマージできてないです

[キャラモデルアップロードデモ](https://youtu.be/D_hZHtvI1bU)

# AI活用

コーディングAgent
メンバーそれぞれ好みのものを使用
・GithubCpilot
・ClaudeCode
・GeminiCLI

# これからの展望

- ２Pプレイヤーの導入
  - 球を任意のタイミングで投げられる
  - 球種を選択できる
- オンラインプレイ
- キャラモデル導入
- 球のモデルをユーザーが選択する