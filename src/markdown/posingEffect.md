# 実装内容
## リポジトリ
リポジトリが複数あります
#### エフェクト用リポジトリ
https://github.com/jyogi-web/sutego_PosingEffect
#### TCP-IP通信用リポジトリ   
https://github.com/jyogi-web/sutego-back-tcp
            
## アーキテクチャ図
![image](https://ptera-publish.topaz.dev/project/01J0FAP61JD3F4GV9WB1GZ623G.png)

## 開発環境
Unity 2022.3.17f1
Python 3.11

## ポーズ判定

出現させるエフェクトはカメラから取得できる骨格の座標（ランドマーク）をもとに~~座標の相対位置で判断しています~~
→~~cos類似度を用いた方法に変更しました~~
→どちらも採用しました
骨格検出にはMediaPipeを使用しています

### 利用している骨格座標
MediaPipeのPoseを利用した際に取得できる32個のxyz座標を利用しています
![image](https://ptera-publish.topaz.dev/project/01J0F8H9VZT5BTBF81PYPVR9XV.png)

### cos類似度によるポーズ検出

1. 事前に正解とするポーズの各ランドマークごとにxyz座標をベクトル化しておきます
2. 現在の各ランドマークごとにxyz座標をベクトル化します
3. ランドマーク同士の類似度を計算し、すべての平均を最終的な類似度とします

#### 座標を検出する際の工夫
カメラからの距離によってベクトルが変わらないように肩の位置からの相対座標に変換してから計算するようにしています

## Unityを選んだ背景

Pythonのみで今回の案を試してみたときに演出面が弱く、Unityであればそこを解決できると考えたため採用しました

## PythonとUnityの連携

### TCP通信
Python側をサーバー、Unity側をクライアントとしてTCP通信を行います
座標データとカメラ映像のデータは別のポートで送信しています

### データの受信
座標のデータはJSONで送信しました
カメラの映像は一度バイト配列に変換し、送信しました

## 検出可能ポーズ

- リスプ 
- きのきのも遊ばない
![image](https://ptera-publish.topaz.dev/project/01J0FNEJNN534Z6WFVBHS8536F.png)
- 波動拳
![image](https://ptera-publish.topaz.dev/project/01J0FNF0TF1BMZ24FPZM1CKDZP.png)
- グリコ
![image](https://ptera-publish.topaz.dev/project/01J0FNFHE3MPF5CTEM9CRN24JM.png)
- かめはめ波
- シュトロハイム
- スタープラチナ
![image](https://ptera-publish.topaz.dev/project/01J0FNFZWFW7HQX9F0S15SJ5BK.png)
- ジョルノジョバーナ
- ハイウェイスター
![image](https://ptera-publish.topaz.dev/project/01J0FNJC9RZCFSNGKND7M7BPFY.png)
- キラークイーン

## エフェクトの工夫
Unity上で出現させるエフェクトを作成しました
一部ポーズ（波動拳・かめはめ波）ではUnityのAnimationを使用してポーズ中に動くようにしました
すべてのエフェクトが自分に追従するようにし、より没入感が高くなりました

# インフラ構成図

AWSでの構成は完成していてcircleciで自動デプロイを試したが、Unityライセンスのアクティベーションの方法がユーザー (Pro、Enterprise のみ) だったので泣く泣く断念

別案としてAzure試みたが、時間が足りませんでした。
手動でなら動かせるらしいでので頑張ってました。
動かないやつならあります...（手動がめんどうだったので更新してません）
https://happy-rock-04a9b501e.5.azurestaticapps.net/


![image](https://ptera-publish.topaz.dev/project/01J0FVBTWZZKVCXBJ8D681RS66.png)

# 今回実装できなかったこと

## MediaPipe
ハンドトラッキングを同時に行うことで手が特徴的なポーズを出すことができませんでした

## 別のポーズ
画像自体はできているのにポーズ認識がうまくいかない、または実装が間に合わなかったポーズがいくつかありました

- 現場猫
- ボンボルド
- ザ・ワールド（動くエフェクトあり）
- チェンソーマン 早川アキ コン （動くエフェクトあり）