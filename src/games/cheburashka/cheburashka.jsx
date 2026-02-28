import "@google/model-viewer"
import "../modelPage.css"
import cheburashka from '../../assets/models/Cheburashka.glb?url'

const Cheburashka=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                <model-viewer src={cheburashka} className="model-canvas" camera-controls autoplay></model-viewer>
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>チェブラーシカの3Dモデル</h2>
        </div>
    )
}
const Description=()=>{
    return(
        <div>
            <h2>使用技術</h2>
            <ul>
                <li>blender</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>好きなキャラクターの3Dモデルがあったら最高だと思い作成しました。</li>
                <li>一番時間がかかったのはウェイトペイントです。なぜなら、vrmファイルとして扱うために人と同じボーンを入れたからです。</li>
                <li>自動でウェイトをしたのですが、全身のほとんどの動きがおかしかったので、手作業でウェイトしました。かなり疲れました。</li>
                <li>ウェイトペイントが終わった後、せっかくだからと思いアニメーションも作りました。</li>
                <li>アニメーションは待機状態と歩行状態があります。</li>
                <li>これらを作成するために、解説動画を見る以外に実際に歩いて、骨の動きを確認しながら作成しました。</li>
            </ul>
        </div>
    )
}
export default Cheburashka