import {Unity,useUnityContext}from 'react-unity-webgl'
import "../gamePage.css"

const Cooking=()=>{
    const {unityProvider,requestFullscreen}=useUnityContext({
        loaderUrl:"build/Cooking.loader.js",
        dataUrl:"build/Cooking.data",
        frameworkUrl:"build/Cooking.framework.js",
        codeUrl:"build/Cooking.wasm",
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
            <h2>15秒クッキング</h2>
        </div>
    )
}
const Description=({onFullscreen})=>{
    return(
        <div>
            <button onClick={onFullscreen} className="fullscreen-button">全画面で遊ぶ</button>
            <h2>ゲーム概要</h2>
            <ul>
                <li>このゲームは3種類のミニゲームのスコアで評価が決まり、選んだ素材でエンディングが変わります。</li>
                <li>選んだ材料によって最後のサラダが変わります。</li>
                <li>ちょっとした小ネタが仕込まれているのでいろいろ試してみてください。</li>
            </ul>
            <h2>操作説明</h2>
            <ul>
                <li>一つ目のゲームは野菜を連打して切る</li>
                <li>二つ目のゲームは野菜をドラッグでスライス</li>
                <li>三つ目のゲームは材料をドラッグで混ぜる</li>
            </ul>
            <h2>使用技術</h2>
            <ul>
                <li>unity</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>二日間で案だししてゲーム制作して完成させるイベントだったので実力を測るのにちょうどいいと思いました。</li>
                <li>私は野菜を切るゲームを担当しました。ここでEventTriggerを初めて使いました。</li>
                <li>これによって、押したときだけでなく離したしたときも検知しやすくなりました。</li>
                <li>このゲームジャムで先輩が設計や役割分担などを細かくやってくれて、とてもいい勉強になりました。</li>
                <li>この作品で行った一人一つミニゲームを作成する方法は、コンフリクトが起きにくくチーム開発がしやすいので「チェブラーシカから部室を守れ！！」で参考にしました。</li>
            </ul>
        </div>
    )
}
export default Cooking