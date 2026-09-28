import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "../markdown/memoBattle.md?raw"
import "../styles/gamePage.css"

const MemoBattle=()=>{
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
            <h2>起承転ちぇぶ</h2>
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
export default MemoBattle