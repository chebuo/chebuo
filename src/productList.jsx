import {Routes,Route,Link} from 'react-router-dom'
import History from './history.jsx'

function ProductList(){
    return(
        <Link to="/history">      
            <button>
                <h3>活動記録をみる</h3>
            </button>  
        </Link>
    )
}

export default ProductList