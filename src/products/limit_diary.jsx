import {Unity,useUnityContext}from 'react-unity-webgl'
import "../style/gamePage.css"

const Limit_diary=()=>{
    const {unityProvider,requestFullscreen}=useUnityContext({
        loaderUrl:"build/Limit_diary.loader.js",
        dataUrl:"build/Limit_diary.data",
        frameworkUrl:"build/Limit_diary.framework.js",
        codeUrl:"build/Limit_diary.wasm",
    })
    return(
        <>
            <div className="page-scale">
                <Header/>
                <Unity unityProvider={unityProvider} className="unity-canvas" />
                <Description onFullscreen={()=>requestFullscreen(true)}/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>限界日記</h2>
        </div>
    )
}
const Description=({onFullscreen})=>{
    return(
        <div>
            <button onClick={onFullscreen} className="fullscreen-button">全画面で遊ぶ</button>
            <h2>ゲーム概要</h2>
            <ul>
                <li>このゲームは夏休みの日記をギリギリに描くのがテーマとなっています。</li>
                <li>始めに水やりや虫取り、スイカ割りなどをします。</li>
                <li>夏休みの最終日になると、夏休みの日記を正確に描けるかクイズ形式で採点します。</li>
            </ul>
            <h2>操作説明</h2>
            <ul>
                <li>虫取りははちみつに誘われた虫をタップ</li>
                <li>スイカ割りは流れてくるスイカだけをタップ</li>
                <li>水やりはオレンジの部分に止まるように長押し</li>
            </ul>
            <h2>使用技術</h2>
            <ul>
                <li>unity</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>この作品も15秒クッキングと同じ2日間でゲームを作成するイベントで作成しました。</li>
                <li>ですが、私は他のハッカソンがあり、一日目しか参加できませんでした。</li>
                <li>私が担当したのは、虫取りの部分です。</li>
                <li>詰まったところは、うまく動いていた部分でいきなりバグが発生したことです。</li>
                <li>一度しっかり動いていたこともあって、どこを治せばよいか見当がつきませんでした。</li>
                <li>ほんとにわからなかったので、スクリプトを作り直して同じコードで動かしたら治りました。</li>
                <li>そのバグの現象には、SerializeFieldにいれたObjectが起動すると消えたり、虫が急に高速で飛んで行ったりがありました。</li>
            </ul>
        </div>
    )
}
export default Limit_diary