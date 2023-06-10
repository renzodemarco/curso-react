import './Item.css'
import { Link } from 'react-router-dom'

function Item({product}) {
    return (
        <div className='itemCard'>
            <Link to={`/item/${product.id}`} className='itemContainer'>
                <img src={product.photo} alt={product.title}/>    
                <div className='cardBody'>
                    <h2 className="cardTitle">{product.title}</h2>
                    <p className="cardPrice">${product.price}</p>
                </div>
            </Link>
        </div>
    )   
}

export default Item