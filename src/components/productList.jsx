import {Link} from 'react-router-dom'
import '../styles/productList.css'
import soapslider_icon from '../assets/soapslider_icon.jpg'
import chebusitu_icon from '../assets/chebusitu_icon.png'
import bigbeetle from '../assets/chebu_fine.jpg'

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
            description='滑り続ける石鹸を障害物をよけるゲームです。'
            link='/soapslider'
            />
        <ProductItem
            title='チェブラーシカから部室を守れ！'
            img={chebusitu_icon}
            description='ハッカソンでコーディングをしっかりした初めての作成した作品です。このゲームはチェブラーシカというキャラクターを使ったミニゲームです。たくさんのかわいいチェブラーシカが登場します。'
            link='/chebusitu'
            />
        <ProductItem
            title='大きなカブトムシ'
            img={bigbeetle}
            description='大きなカブを食べられないようにカブトムシを倒すタワーディフェンスとシューティングゲームを組み合わせたゲームです。'
            link='https://unityroom.com/games/bigbeetle'
            />
        </div>
        </>
    )
}

function ProductItem({
    title,
    img,
    description,
    link
    }){
    return(
        <Link to={link} className="product-link">
        <div className="product-item">
            <h3>{title}</h3>
            <img src={img} alt={title} />
            <p>{description}</p>
        </div>
        </Link>
    )
}

export default ProductList