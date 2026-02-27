import {useRef} from 'react'
import '../styles/productList.css'
import '../styles/history.css'
import {ProductItem} from '../components/productList.jsx'

import soapslider_icon from '../assets/soapslider_icon.jpg'
import chebusitu_icon from '../assets/chebusitu_icon.png'
import bigbeetle_icon from '../assets/bigbeetle_icon.jpg'
import cooking_icon from '../assets/cooking_icon.png'
 
export default function History(){
  return(
    <>
        <h1>活動記録</h1>
        <div className="history-list">
          <HistoryItem/>
        </div>
    </>
    )
}

function HistoryItem(){
  const historyItems=[
    {
      date :"2025年4月",
      description:"福岡工業大学に入学"
    },
    {
      date:"2025年5月",
      title:"石鹸スライダー",
      img:soapslider_icon,
      description:"開発を始めて一番最初に自分で作った作品です。これは滑り続ける石鹸を操作して障害物をよけるゲームです。",
      technology:["個人開発","unity"],
      link:"/soapslider"
    },
    {
      date:"2025年8月",
      title:"15秒クッキング",
      img:cooking_icon,
      description:"",
      technology:["チーム開発","unity"],
      link:"/cooking"
    },
    {
      date:"2025年9月",
      title:"大きなカブトムシ",
      img:bigbeetle_icon,
      description:'大きなカブを食べられないようにカブトムシを倒すタワーディフェンスとシューティングゲームを組み合わせたゲームです。',
      technology:["個人開発","unity"],
      link:"/bigbeetle"
    },
    {
      date:"2025年11月",
      title:"チェブラーシカから部室を守れ！！",
      img:chebusitu_icon,
      description:'ハッカソンでコーディングをしっかりした初めての作成した作品です。このゲームはチェブラーシカというキャラクターを使ったミニゲームです。たくさんのかわいいチェブラーシカが登場します。',
      technology:["チーム開発","ハッカソン","unity"],
      link:"/chebusitu"
    }
  ]
  return(
    <>
    {historyItems.map((item,i)=>(
    <div className="history-item" key={i}>
      {item.title?(
        <>
      <div className="history-header">
        <span className="history-dot"/>
        <span className="history-date">{item.date}</span>
      </div>
      
      <div className="history-content">
        <ProductItem
            title={item.title}
            img={item.img}
            description={item.description}
            technology={item.technology}
            link={item.link}
        />
      </div>
      </>
      ):(
        <>
        <div className="history-header">
          <span className="history-dot"/>
          <span className="history-date">{item.date} {item.description}</span>
        </div>
        </>
      )}
    </div>
  ))}
  </>
  )
}