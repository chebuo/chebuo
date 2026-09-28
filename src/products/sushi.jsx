import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "../markdown/sushi.md?raw"
import "../styles/gamePage.css"

const Sushi=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                <Description onFullscreen={()=>requestFullscreen(true)}/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>寿司すぎて悦</h2>
            <a target="_blank" href="https://github.com/chebuo/DDDhackathon/releases/tag/v0.5" rel="noopener noreferrer">ダウンロードリンクはこちらです</a>
        </div>
    )
}
const Description = () => {
    return (
        <div className="description">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
            </ReactMarkdown>
        </div>
    );
};
export default Sushi