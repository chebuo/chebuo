import {useState} from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import "./gamePage.css"
import arnavigatorPages from '../assets/arnavigator.pdf?url'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const Arnavigator=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                <PdfViewer/>
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>大きなカブトムシ</h2>
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
                <li>unity,UI Tool Kit,ObjectPool</li>
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

const PdfViewer=()=>{
    const [totalPages,setTotalPages]=useState(0);
    const onLoadSuccess=({numPages})=>{
        setTotalPages(numPages);
    }
    const pdfContents=[];
    for(let i=0;i<totalPages;i++){
        const d=(
            <Page key={i}
                pageNumber={i+1}
                width={300}
            />
        );
        pdfContents.push(d);
    }
    console.log(arnavigatorPages);
    return(
        <div style={{
                width: "100%",
                height: "100%",
                overflow: 'scroll',
                paddingTop: '32px'
            }}>
                <Document
                    file={arnavigatorPages}
                    onLoadSuccess={onLoadSuccess}
                    
                >
                    {pdfContents}
                </Document>
            </div>
    )
}
export default Arnavigator