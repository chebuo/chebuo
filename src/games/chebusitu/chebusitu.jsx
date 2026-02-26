import {Unity,useUnityContext}from 'react-unity-webgl'
import "../gamePage.css"

const Chebusitu=()=>{
    const {unityProvider,sendMessage}=useUnityContext({
        loaderUrl:"build/Chebusitu.loader.js",
        dataUrl:"build/Chebusitu.data",
        frameworkUrl:"build/Chebusitu.framework.js",
        codeUrl:"build/Chebusitu.wasm",
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
            <h2>チェブラーシカから部室を守れ</h2>
        </div>
    )
}
const Description=()=>{
    return(
        <div>
            <h2>ゲーム概要</h2>
            <ul>
                <li>このゲームはワンボタンアクションゲームです。</li>
                <li>ハッカソンで3人チームで作成した作品です。</li>
                <li>ゲームの物語の詳細は下のほうに遷移先を貼っているのでよかったら見てください。</li>
            </ul>
            <h2>操作説明</h2>
            <ul>
                <li>一つ目のゲームは真ん中の祭壇に来るチェブラーシカをクリック</li>
                <li>たまに来るオレンジは祭壇に入れるとHPが回復するのでクリックしないようにしよう</li>
                <li>二つ目のゲームは壁を乱反射するチェブラーシカをクリック</li>
            </ul>
            <h2>使用技術</h2>
            <ul>
                <li>unity,DoTween</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>ハッカソンで途中までかなり順調だったのですが、いきなりゲームが動かなくなるバグが発生しました。</li>
                <li>このバグを治すためにログを残したり、ゲームをプレイしたりを何回も繰り返しました。</li>
                <li>そのおかげで、バグが発生する条件がゲームを完全にクリアした時だと絞り出すことができました。</li>
                <li>バグの原因は、最後までクリアしたらtime.Scaleを0にするというコードでした。</li>
                <li>そして、自分が担当していなかった部分でかつ、time.Scaleの存在を知りませんでした。</li>
                <li>これらによって、ログにも出ない見つけるのが困難なバグが発生していました。</li>
                <li>発表までにバグを修正することはできませんでしたが、しっかり動くように作ることができました。</li>
            </ul>
            <h2>ゲームの詳細</h2>
            <a href="https://topaz.dev/projects/3e264ccb22b7f5f0cc15">チェブラーシカから部室を守れ！！の詳細</a>
        </div>
    )
}
export default Chebusitu