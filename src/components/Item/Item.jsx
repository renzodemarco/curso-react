import { Button } from 'react-bootstrap'
import './Item.css'
import { Link } from 'react-router-dom'

function Item({product}) {
    return (
        <div className="card">
            <img src={product.photos[0]} className="card-img-top" alt="prenda actual"/>          
            <div className="card-body">
                <h2>{product.title}</h2>
                <p className="card-text">${product.price}</p>
                <Link to={`/item/${product.id}`}>
                    <Button>Ver más</Button>
                </Link>
            </div>
        </div>
    )   
}

export default Item