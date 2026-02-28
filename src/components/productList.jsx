import {Link} from 'react-router-dom'
import '../styles/productList.css'
import {data} from '../data/projects.js'

function ProductList(){
    return(
        <>
        <Link to="/history">      
            <button className="history-button">
                <h3>活動記録をみる→</h3>
            </button>  
        </Link>
        <div className="product-list">
            {data.map((data,i)=>(
                <ProductItem key={i}
            title={data.title}
            img={data.icon}
            description={data.description}
            technology={data.technology}
            link={data.path}
            />
            ))}
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