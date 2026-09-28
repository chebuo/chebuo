import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "../markdown/mymemo.md?raw"
import "../styles/gamePage.css"

const MyMemo=()=>{
    return(
        <>
            <div className="page-scale">
                <Description onFullscreen={()=>requestFullscreen(true)}/>
            </div>
        </>  
)}

const Description = () => {
    return (
        <div className="description">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
            </ReactMarkdown>
        </div>
    );
};
export default MyMemo