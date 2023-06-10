import { Link } from 'react-router-dom'
import './CartItem.css'

const CartItem = ({item, handleRemove}) => {
    return (
        <li className='cartListItem'>
            <Link className='cartImageContainer' to={`/item/${item.id}`}>
                <img className='cartItemImg' src={item.photo} alt={item.title}/>
            </Link>
            <div className='cartInfoContainer'>
                <h2>{item.title}</h2>
                <p>Tamaño: <b>{item.size}</b></p>
                <p>Precio unitario: <b>${item.price}</b></p>
                <p>Cantidad: <b>{item.quantity}</b></p>
                <p>Precio total: <b>${item.price * item.quantity}</b></p>
                <button onClick={()=> handleRemove(item.id)}>Eliminar item</button>
            </div>
        </li>)
}

export default CartItem