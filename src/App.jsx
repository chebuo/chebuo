import { useRef, useState ,useEffect} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'

import ProductList from './components/productList.jsx'
import History from './pages/history.jsx'
import Soapslider from './games/soapslider/soapslider.jsx'
import Bigbeetle from './games/bigbeetle/bigbeetle.jsx'
import Cooking from './games/cooking/cooking.jsx'
import Chebusitu from './games/chebusitu/chebusitu.jsx'
import Cheburashka from './games/cheburashka/cheburashka.jsx'

import soapslider_icon from './assets/soapslider_icon.jpg'
import bigbeetle_icon from './assets/bigbeetle_icon.jpg'
import cooking_icon from './assets/cooking_icon.png'
import chebusitu_icon from './assets/chebusitu_icon.png'
import cheburashka_icon from './assets/cheburashka_icon.png'
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
    img: soapslider_icon,
    link: "/soapslider"
  },
  {
    img:bigbeetle_icon,
    link:"/bigbeetle"
  },
  {
    img:cooking_icon,
    link:"/cooking"
  },
  {
    img: chebusitu_icon,
    link: "/chebusitu"
  },
  {
    img:cheburashka_icon,
    link:"/cheburashka"
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
      <Link
        key={i}
        to={slide.link}
        rel="noopener noreferrer"
        >
          <img src={slide.img} className="slide-img" />     
        </Link>
      ))}
      </div>
    </div>
      <h1>chebuoのポートフォリオへようこそ</h1>
      <h2>--SNSアカウント一覧--</h2>
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
    <Route path="/bigbeetle" element={<Bigbeetle/>}></Route>
    <Route path="/cooking" element={<Cooking/>}></Route>
    <Route path="/chebusitu" element={<Chebusitu/>}></Route>

    <Route path="/cheburashka" element={<Cheburashka/>}></Route>
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
