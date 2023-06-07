import { NavLink } from 'react-router-dom';
import carrito from '../../assets/carrito.svg';
import './CartWidget.css';
import { useContext } from 'react';
import {CartContext} from '../../contexts/CartContext';

function CartWidget() {

    const {cartQuantity} = useContext(CartContext);

    return (
        <div>
            <NavLink to='/cart' className="cart-container">
            <img className="cart-widget" src={carrito} alt="carrito"/>
            <p>{cartQuantity()}</p>
            </NavLink>
        </div>
    )
}

export default CartWidget;