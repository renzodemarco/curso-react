import { useContext } from 'react';
import {CartContext} from '../../contexts/CartContext'
import { Link } from 'react-router-dom';
import './CartDisplay.css'

const Carrito = () => {

    const {cart, totalPrice, removeItem, clearCart} = useContext(CartContext);
    
    return (
    <>
        <h1>Carrito de compras</h1>
        <ul className='cart-display'>
            {cart.map(item => {
                return  (
                <li key={item.id}>
                    <h2 className='item-title'>{item.title}</h2>
                    <p>Tamaño: <span>{item.size}</span></p>
                    <h2>${item.price * item.quantity}</h2>
                    <p>Cantidad: <span>{item.quantity}</span></p>
                    <button onClick={()=> removeItem(item.id)}>Eliminar item</button>
                </li>)
                }
            )}
        </ul>
        <div>
            {cart.length > 0 ? 
            <>
                <h2>Precio total: ${totalPrice()}</h2>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <button>
                    <Link to='/form'>
                    Finalizar mi compra
                    </Link>
                </button>
            </> :
            <>
                <h2>Tu carrito de compras está vacío.</h2>
                <h2>Regresar al <Link className='link-inicio' to='/'>INICIO</Link></h2>
            </>}
        </div>

    </>
    )
}

export default Carrito