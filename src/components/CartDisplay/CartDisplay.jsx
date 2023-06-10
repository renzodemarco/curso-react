import { useContext } from 'react';
import {CartContext} from '../../contexts/CartContext'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './CartDisplay.css'

const Carrito = () => {

    const {cart, totalPrice, removeItem, clearCart} = useContext(CartContext);
    
    return (
    <>
        <h1>Carrito de compras</h1>
        <div className='cartDisplayContainer'>
            {cart.length > 0 ? 
                <>
                    <ul className='cartDisplay'>
                        {cart.map(item => {
                            return (
                                <CartItem key={item.id} item={item} handleRemove={removeItem}/>
                            )}
                        )}
                    </ul>
                    <div className='cartButtonDisplay'>
                        <>
                            <h2 className='totalPrice'>Precio total: ${totalPrice()}</h2>
                            <Link to='/form'>
                                <button>
                                Realizar compra
                                </button>
                            </Link>
                            <button onClick={clearCart}>Vaciar Carrito</button>
                        </> 
                    </div>
                </>
                    :
                <div className='emptyCartContainer'>
                    <p className='emptyCart'>Tu carrito de compras está vacío.</p>
                    <Link to='/'>
                        <button className='goIndexButton'>Regresar al Inicio</button>
                    </Link>
                </div>
            }
        </div>
    </>
    )
}

export default Carrito