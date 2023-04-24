import carrito from "./assets/carrito.svg"

function CartWidget() {
    return (
        <div className="cart-container">
            <img className="cart-widget" src={carrito} alt="carrito"/>
            <p>0</p>
        </div>
    )
}

export default CartWidget;