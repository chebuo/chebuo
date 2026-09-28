import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Unity,useUnityContext}from 'react-unity-webgl';
import markdown from "../markdown/FishRamble.md?raw"
import "../styles/gamePage.css"

const FishGramble=()=>{
    const {unityProvider,requestFullscreen}=useUnityContext({
        loaderUrl:"build/FishGramble.loader.js",
        dataUrl:"build/FishGramble.data",
        frameworkUrl:"build/FishGramble.framework.js",
        codeUrl:"build/FishGramble.wasm",
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
            <h2>FishGramble!!</h2>
        </div>
    )
}
const Description = ({ onFullscreen }) => {
    return (
        <div className="description">
            <button
                onClick={onFullscreen}
                className="fullscreen-button"
            >
                全画面で遊ぶ
            </button>

            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
            </ReactMarkdown>
        </div>
    );
};
export default FishGramble