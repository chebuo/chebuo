import armakerImage from '../assets/armaker.png'
import "../styles/modelPage.css"

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
                <li>A-Flame,AR.js,gitpages</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>作った3Dモデルを生かしたいと思い考えていた時にARの記事を読み作ろうと思いました。</li>
                <li>A-Flameを使った理由は、web上で簡単に作れるというのをみて気になったからです。</li>
                <li>公式のページがほとんどコードを書いてくれたので、お遊び感覚でQRコードベースを実装できました。</li>
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