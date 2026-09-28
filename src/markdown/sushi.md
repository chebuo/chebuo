# 寿司シミュレータ
このゲームは回転寿司に流れている寿司を眺めるだけのゲームです。
## 技術的にこだわったところ
ECSを使用しました。
ECSとはEntity Component Systemの略称のコンポーネント指向です。
この図のようにScene上にあるentityはComponentのデータのみ入っており、Systemがentity全体のComponentを制御する。
![image](https://ptera-publish.topaz.dev/project/01KSRPCT2QH77CWJMF5DR5SEWM.png)
なので、大量に生成しても処理が重くなることがないです。
ECSを使うメリットはこれだけではないです。
BurstCompilerを使うことができます。
これによって、データの配置が最適化され、実行速度がかなり速くなります。
大量に寿司が流れる回転寿司にぴったりだと思い、採用しました。

### ECSで戸惑ったところ
ECSをunityで使うとなるとSystemの部分でUnityEngineのAPIを使うことができません。その代わり、unity.mathematicsやunity.transformsなどを使います。つまり、今まで学んできたコードの書き方ができないということです。そして、BurstCompileもUnityEngineのAPIを使用することができません。なので、セットで使うことができます。ECSとBurstCompilerの両方を使うことで大量のオブジェクトを扱っても軽く済むということです。

下記のコードはGameObjectからentityに変換する処理です。entityにはMoveという構造体のみが入ります。下のMonoBehaviourでGameObjectから取得した_speedをentityようにBakeで変換しています。
```
using UnityEngine;
using Unity.Entities;

public struct Move : IComponentData
{
    public float speed;
}

public class MoveAuthoring : MonoBehaviour
{
    public float _speed;

    class Baker : Baker<MoveAuthoring>
    {
        public override void Bake(MoveAuthoring src)
        {
            var data = new Move() { speed = src._speed };
            AddComponent(GetEntity(TransformUsageFlags.Dynamic), data);
        }
    }
}
```
以下のコードはMoveAuthoringがついたentityをx軸に平行移動させるためのコードです。見ての通り、usingにUnityEngineがありません。unityを少しでも使ったことがある人はわかると思いますが、コードの書き方が全然違います。
```
using Unity.Burst;
using Unity.Entities;
using Unity.Transforms;
using Unity.Mathematics;
using Unity.Collections;

partial struct MoveSystem : ISystem
{
    [BurstCompile]
    public void OnUpdate(ref SystemState state)
    {
        var ecb = new EntityCommandBuffer(Allocator.Temp);
        var deltaTime = SystemAPI.Time.DeltaTime;
        foreach (var (move, transform, entity) in 
        SystemAPI.Query<RefRO<Move>, RefRW<LocalTransform>>().WithEntityAccess())
        {
            transform.ValueRW.Position += new float3(1, 0, 0) * move.ValueRO.speed * deltaTime;

            if (transform.ValueRO.Position.x > 0)
            {
                ecb.DestroyEntity(entity);
            }
        }
    }
}
```
---
ECSのシステム上、entity一つ一つに制御するコンポーネントを付けるわけではないので、個別でオブジェクトを参照するのを工夫しました。データが入ってないコンポーネントデータを取得したいオブジェクトに付与して、それをタグとして扱うことでうまく取得しました。

以下のコードのように、変数が入っていないコンポーネントを作成して、そのコンポーネントがついてるentityを取得することで判別した。
```
using Unity.Entities;
using UnityEngine;

public struct DestroyTag : IComponentData
{
    
}

public class DestroyTagAuthoring : MonoBehaviour
{
    class Baker : Baker<DestroyTagAuthoring>
    {
        public override void Bake(DestroyTagAuthoring src)
        {
            AddComponent<DestroyTag>(GetEntity(TransformUsageFlags.Dynamic));
        }
    }
}
```

## 見た目でこだわったところ
すべてのモデルをblenderで、マテリアルをunityで自作しました。
unityのHDRPという高クオリティのレンダーパイプラインを使用しました。これによって、GI(間接光)を表現できるなど、綺麗なライティング処理をすることができました。

回転寿司は大量の寿司が流れているので、遠くから見ると表示される頂点数がとても多くなります。なので、LODを使用しました。

# 寿司レーゲーム
寿司をいち早く届けるゲームです。二人で食べた枚数とタイムを競うモードと時間内に食べた枚数を競スコアアタックがあります。
## こだわったところ
競い方や複数のモードなど面白く遊べるようにしました。爽快感がありつつ少し難しいというゲームを目標にしました。
**対戦モード**
オフラインで二人で対戦するモードです。脱線しないように相手より早くゴールするモードです。5つの寿司を選び、レースをします。タイム、枚数から勝敗を決めます。
**スコアアタックモード**
資金内でなるべく多くの寿司を獲得するスコアアタックモードです。時間内にゴールするとタイムと資金のボーナスが与えられます。
**オンライン対戦モード(仮)**
最大５人対戦のモードです。相手より早くゴールした人が勝ちです。レーンチェンジ可能で相手をほかレーンへ飛ばすことができます。


# 寿司カードゲーム
テーマが寿司のカードゲームです。製作途中なのでUIが見にくかったり、画像が入ってなかったりします。

## 作ろうとしていたルール概要
ターン制、コストあり、山札なし、手札8枚消費無しで相手の体力を０にすると勝利です。コストは１ターンに1000ずつ増えて、使わなかったコストの半分（最大2000）を持ち越すことができます。相手のカードを攻撃するとお互いのパワーを比較し、低い方は破壊され、高い方はパワーを削られます。

## 作り切れなかったところ
カードの画像挿入、カードの特殊効果、環境整理、UIなど
手札消費無しの実装をしていなかったことを15分前に思い出して絶望しました。

# 寿司シューティング
マグロのお寿司がプレイヤーの寿司シューティングゲームです。迫りくるお寿司の皿をわさびを射出して道を切り開き、画面外に出ないようにします。                


# みんなの感想

### chebuo 
初めてECSとHDRPを使ってとても楽しかった!!!
HDRPで綺麗なグラフィックのゲームを作る方法を知って、ECSで処理を最適化する方法を知りました。

### uukino
自分の思うままにゲームが作れてたのしかったです。次はほかのモードも追加したいです。


### moriyama
カードゲームは大変そうだと思っていたけど想像の２倍大変でした。その分経験は積めたと思います。完成させてほかの人とも遊べるように開発頑張りたいです。

### moyashidon
シンプルなシューティングゲームを作るのも大変で、チームに教えてもらったり、記事を見てコードを書いたりして何とか最低限完成させることができました。ゲーム作るのって大変ですね。