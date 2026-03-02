import armakerImage from '../assets/armaker.png'
import "./modelPage.css"

const Arcodemodel=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                    <img src={armakerImage}/>
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>A-Flame触ってみた</h2>
        </div>
    )
}
const Description=()=>{
    return(
        <div>
            <button onClick={downloadImage}style={{margin:"5px"}}>画像を保存</button>
            <button onClick={()=>{
                const link=document.createElement("a");
                link.href="https://chebuo.github.io/ARcodeModel/";
                link.target="_blank"
                link.click();
            }}style={{margin:"5px"}}>
            アプリへ移動→</button>
            <h2>使用技術</h2>
            <ul>
                <li>A-Flame,gitpages</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>作った3Dモデルを生かしたいと思い考えていた時にARの記事を読み作ろうと思いました。</li>
                <li>A-Flameにした理由は、web上で簡単に作れるというのをみて気になったからです。</li>
                <li>実際に、公式のページがほとんどコードを書いてくれて</li>
                <li>ウェイトペイントが終わった後、せっかくだからと思いアニメーションも作りました。</li>
                <li>アニメーションは待機状態と歩行状態があります。</li>
                <li>これらを作成するために、解説動画を見る以外に実際に歩いて、骨の動きを確認しながら作成しました。</li>
            </ul>
        </div>
    )
}
const downloadImage=()=>{
    const path=document.createElement("a");
    path.href=armakerImage;
    path.download="armaker.png";
    path.click();
}
export default Arcodemodel