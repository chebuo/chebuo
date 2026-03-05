import "../styles/modelPage.css"

const Eight_wall=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
<iframe
  src="/eight_wall/index.html"
  allowFullScreen
  allow="camera; microphone; geolocation; accelerometer; magnetometer; gyroscope; autoplay; clipboard-read; clipboard-write; fullscreen"
></iframe>
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
export default Eight_wall