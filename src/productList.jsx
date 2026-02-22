import {Link} from 'react-router-dom'
import './productList.css'
import soapslider from './assets/soapslider_icon.jpg'
import bigbeetle from './assets/chebu_fine.jpg'

function ProductList(){
    return(
        <>
        <Link to="/history">      
            <button>
                <h3>活動記録をみる</h3>
            </button>  
        </Link>
        <div>
        <ProductItem
            title='石鹸スライダー'
            img={soapslider}
            description='滑り続ける石鹸を障害物をよけるゲームです。'
            link='https://unityroom.com/games/soapslider'
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