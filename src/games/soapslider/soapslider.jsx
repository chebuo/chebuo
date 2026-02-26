import {Unity,useUnityContext}from 'react-unity-webgl'
import "../gamePage.css"

const Soapslider=()=>{
    const {unityProvider,sendMessage}=useUnityContext({
        loaderUrl:"build/SoapSlider_disable.loader.js",
        dataUrl:"build/SoapSlider_disable.data",
        frameworkUrl:"build/SoapSlider_disable.framework.js",
        codeUrl:"build/SoapSlider_disable.wasm",
    })
    return(
        <>
            <div className="page-scale">
                <Header/>
                <Unity unityProvider={unityProvider} className="unity-canvas" />
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>石鹸スライダー</h2>
        </div>
    )
}
const Description=()=>{
    return(
        <div>
            <h2>ゲーム概要</h2>
            <ul>
                <li>このゲームは2D横スクロールRUNゲームです。</li>
                <li>障害物に当たるか、石鹸が小さくなると終わります。</li>
                <li>石鹸は地面についているとき、水中にいるときに小さくなります。</li>
            </ul>
            <h2>操作説明</h2>
            <ul>
                <li>スマホは画面をタップ、PCはSPACEまたは、クリックでスタート</li>
                <li>赤いゲージが溜まると石鹸がジャンプ</li>
                <li>水中だとジャンプ力2倍</li>
            </ul>
            <h2>使用技術</h2>
            <ul>
                <li>unity</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>初めて作ったゲームだったので様々なところで詰まりました。</li>
                <li>特に印象に残っている詰まったところは当たり判定に関するところです。このゲームの地面はたくさんのタイルマップで作られています。</li>
                <li>なので、一つ一つのタイルの高さが若干異なり、石鹸の接地判定が取りずらくなっています。</li>
                <li>これによって、うまくジャンプすることができないバグが生まれました。</li>
                <li>普通にコライダーを使う方法で安定させることは障害物との接触判定などと干渉してできないので、Raycastを使用しました。</li>
                <li>これによって、一番の問題だったうまくジャンプできないバグは解決しました。</li>
            </ul>
        </div>
    )
}
export default Soapslider