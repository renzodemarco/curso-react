import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import './NavBar.css'
import { ButtonGroup, Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function NavBar() {
    return (
        <div className="header">
            <div className="logo-head-container">
                <Link className="logo-head-link" to='/'>
                    <img className="logo-head" src={logo} alt="logo de cara moda circular" />
                </Link>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to='/'>INICIO</Link>
                    </li>
                    <li>
                        <Dropdown as={ButtonGroup}>
                            <Link to={'/products'}>PRODUCTOS</Link>
                            <Dropdown.Toggle id="dropdown-split-basic" />
                            <DropdownMenu>
                                <Dropdown.Item className='categoryContainer'><Link to={'/products/camisas'} className="categories">CAMISAS</Link></Dropdown.Item>
                                <Dropdown.Item className='categoryContainer'><Link to={'/products/abrigos'} className="categories">ABRIGOS</Link></Dropdown.Item>
                                <Dropdown.Item className='categoryContainer'><Link to={'/products/vestidos'} className="categories">VESTIDOS</Link></Dropdown.Item>
                                <Dropdown.Item className='categoryContainer'><Link to={'/products/chalecos'} className="categories">CHALECOS</Link></Dropdown.Item>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li>
                        <Link to='/que-onda-cara'>¿QUÉ ONDA CARA®?</Link>
                    </li>
                    <li>
                        <Link to='/size-guide'>GUÍA DE MEDIDAS</Link>
                    </li>
                </ul>
            </nav>
            <div className='cartContainer'>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar