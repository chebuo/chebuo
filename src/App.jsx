import { useRef, useState ,useEffect} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import ProductList from './components/productList.jsx'
import History from './pages/history.jsx'
import Soapslider from './games/soapslider/soapslider.jsx'
import chebu from './assets/chebu_fine.jpg'
import chebu_yellow from './assets/yellow_chebu.jpg'
import github from './assets/github_icon.png'
import x from './assets/x_icon.png'
import unityroom from './assets/unityroom_icon.jpg'

function App() {
  const trackRef=useRef(null);
  const [trackWidth,setTrackWidth]=useState(0);
  useEffect(() => {
  if (!trackRef.current) return;

  const observer = new ResizeObserver(() => {
    const width = trackRef.current.scrollWidth / 2;
    setTrackWidth(width);
  });

  observer.observe(trackRef.current);

  return () => observer.disconnect();
}, []);

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
  const speed=50;
  const duration=trackWidth/speed;
  return (
    <Routes>
      <Route path="/" element={
    <>
    <div className="slider">
      <div 
      ref={trackRef}
      className="slide-track"
      style={{animation:trackWidth?`scroll ${duration}s linear infinite`:'none'}}
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
      <h2>--SNSアカウント一覧-</h2>
      <div className="iconList">
        <SNSIcon
        img={github}
        link="https://github.com/chebuo"
        name="github"
        />
        <SNSIcon
        img={x}
        link="https://x.com/chebuo_"
        name="X"
        />
        <SNSIcon
        img={unityroom}
        link="https://unityroom.com/users/chebuo"
        name="UnityRoom"
        />
      </div>
      <h2>--成果物一覧--</h2> 
      <ProductList/>
    </>   
    }/>
    <Route path="/history" element={<History/>}/>
    <Route path="/soapslider" element={<Soapslider/>}></Route>
    </Routes>
  )
}

const SNSIcon=({img,link,name})=>{
  return(
    <a
     href={link}
     target="_blank"
     rel="noopener noreferrer"
     >
      <img src={img} alt={`${name}_icon`} className="icon"/>
      <p className="icon-text">{name}</p>
     </a>
  )
}

export default App
