import { useRef, useState ,useEffect} from 'react'
import './App.css'
import History from './history.jsx'
import chebu from './assets/chebu_fine.jpg'
import chebu_yellow from './assets/yellow_chebu.jpg'
import github from './assets/github_icon.png'
import x from './assets/x_icon.png'
import unityroom from './assets/unityroom_icon.jpg'

function App() {
  const trackRef=useRef(null);
  const [trackWidth,setTrackWidth]=useState(0);
  useEffect(()=>{
    const updateWidth=()=>{
    if(trackRef.current)setTrackWidth(trackRef.current.scrollWidth/2);
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    window.addEventListener('load', updateWidth);
    return () =>{
      window.removeEventListener('load', updateWidth);
      window.removeEventListener('resize',updateWidth)
    }
  },[]);

  const slides = [
  {
    img: chebu,
    link: "https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%A7%E3%83%96%E3%83%A9%E3%83%BC%E3%82%B7%E3%82%AB"
  },
  {
    img: chebu_yellow,
    link: "https://dash.cloudflare.com/e6ab8471d01bc4780a69c6978ce2f252/pages/view/chebuo"
  }
];
  const repeatSlides=Array(12).fill(slides).flat();
  const loopSlides=[...repeatSlides, ...repeatSlides];
  return (
    <>
    <div className="slider">
      <div 
      ref={trackRef}
      className="slide-track"
      style={{animation:trackWidth?`scroll ${(trackWidth*3)/1}s linear infinite`:'none'}}
      >
      {loopSlides.map((slide, i) => (
      <a 
        key={i}
        href={slide.link}
        target="_blank"
        rel="noopener noreferrer"
        >
          <img src={slide.img} alt={i % 2 === 0 ? "chebu" : "chebu_yellow"} className="slide-img" />     
        </a>
      ))}
      </div>
    </div>
      <h1>chebuoのポートフォリオへようこそ</h1>
      <h2>SNSアカウント一覧</h2>
      <div className="iconList">
        <a 
        href="https://github.com/chebuo"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img src={github} alt="github_icon" className="icon"/>
          <p>github</p>
        </a>
        <a 
        href="https://x.com/chebuo_"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img src={x} alt="x_icon" className="icon"/>
          <p>X</p>
        </a>
        <a 
        href="https://unityroom.com/users/chebuo"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img src={unityroom} alt="unityroom_icon" className="icon"/>
          <p>UnityRoom</p>
        </a>
      </div>
      <h2>成果物一覧</h2>
      <button onClick={()=>{window.location.href="/history.jsx"}}>
        <h2>活動記録をみる</h2>
      </button>

    </>
  )
}

export default App
