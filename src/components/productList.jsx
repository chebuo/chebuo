import {Link} from 'react-router-dom'
import '../styles/productList.css'
import soapslider_icon from '../assets/soapslider_icon.jpg'
import chebusitu_icon from '../assets/chebusitu_icon.png'
import bigbeetle_icon from '../assets/bigbeetle_icon.jpg'
import cooking_icon from '../assets/cooking_icon.png'
import cheburashka_icon from '../assets/cheburashka_icon.png'

function ProductList(){
    return(
        <>
        <Link to="/history">      
            <button className="history-button">
                <h3>活動記録をみる→</h3>
            </button>  
        </Link>
        <div className="product-list">
        <ProductItem
            title='石鹸スライダー'
            img={soapslider_icon}
            description='開発を始めて一番最初に自分で作った作品です。これは滑り続ける石鹸を操作して障害物をよけるゲームです。'
            technology={["個人開発","unity"]}
            link='/soapslider'
            />
        <ProductItem
            title='チェブラーシカから部室を守れ！'
            img={chebusitu_icon}
            description='ハッカソンでコーディングをしっかりした初めての作成した作品です。このゲームはチェブラーシカというキャラクターを使ったミニゲームです。たくさんのかわいいチェブラーシカが登場します。'
            technology={["チーム開発","ハッカソン","unity","DoTween"]}
            link='/chebusitu'
            />
        <ProductItem
            title='大きなカブトムシ'
            img={bigbeetle_icon}
            description='大きなカブを食べられないようにカブトムシを倒すタワーディフェンスとシューティングゲームを組み合わせたゲームです。'
            technology={["個人開発","unity"]}
            link='https://unityroom.com/games/bigbeetle'
            />
        <ProductItem
        title='15秒クッキング'
        img={cooking_icon}
        description='大きなカブを食べられないようにカブトムシを倒すタワーディフェンスとシューティングゲームを組み合わせたゲームです。'
        technology={["チーム開発","unity"]}
        link='/cooking'
            />
        <ProductItem
        title='チェブラーシカ'
        img={cheburashka_icon}
        description=''
        technology={["個人開発","blender"]}
        link='/cheburashka'
            />
        </div>
        </>
    )
}

export function ProductItem({
    title,
    img,
    description,
    technology=[],
    link
    }){
    return(
        <Link to={link} className="product-link">
            <h3>{title}</h3>
            <img src={img} alt={title} />
            <p>{description}</p>
            <hr className="partition-line"/>
            <div className="technology-list">{technology.map((tech,index)=>(
                <span key={index} className="technology-item">
                    {tech}
                </span>
            ))}</div>
        </Link>
    )
}

export default ProductList