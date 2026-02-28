import { useRef, useState ,useEffect} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import {data} from './data/projects.js'

import ProductList from './components/productList.jsx'
import History from './pages/history.jsx'

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

  const repeatSlides=Array(12).fill(data).flat();
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
        to={slide.path}
        rel="noopener noreferrer"
        >
          <img src={slide.icon} className="slide-img" />     
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
    <Route path="/history" element={<History/>}></Route>
    {data.map((data)=>(
      <Route path={data.path} element={<data.element/>}></Route>
    ))}
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
