import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "../markdown/baseball.md?raw"
import "../styles/gamePage.css"

const threeBaseball=()=>{
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
            <h2>3D甲子園</h2>
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
export default threeBaseball