import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "../markdown/robbery.md?raw"
import "../styles/gamePage.css"

const Robbery=()=>{
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
            <h2>カジュアル強盗</h2>
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
export default Robbery