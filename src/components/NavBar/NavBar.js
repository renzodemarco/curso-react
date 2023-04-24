import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo.png"

function NavBar() {
    return(
        <nav>
            <div className="logo-head-container">
                <img className="logo-head" src={logo} alt="logo de cara moda circular"/>
            </div>
            <div className="nav-bar">
                <a href="#">INICIO</a>
                <a href="#">¿QUÉ ONDA CARA®?</a>
                <a href="#">PRODUCTOS</a>
                <a href="#">GUÍA DE MEDIDAS</a>
                <a href="#">INFORMACIÓN</a>
                <a href="#">CONTACTO</a>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar