import './Item.css'
import { Link } from 'react-router-dom'

function Item({product}) {
    return (
        <div className="card">
            <Link to={`/product/${product.id}`}>
                <img src={product.photo} className="card-img-top" alt="prenda actual"/>          
                <div className="card-body">
                    <h2>{product.title}</h2>
                    <p className="card-text">${product.price}</p>
                </div>
            </Link>
        </div>
    )   
}

export default Item