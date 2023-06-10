import React from 'react'
import ItemsCarouselContainer from '../components/ItemsCarouselContainer/ItemsCarouselContainer'
import { Link } from 'react-router-dom'

const Inicio = () => {
    return (
        <>
            <h1>¡Bienvenido a la web de CARA®!</h1>
            <div className="inicioContent">
            <ItemsCarouselContainer />
            <div className='bienvenida'>
                <p>
                    Desde la sección<Link to='/products'> PRODUCTOS </Link>podés chusmear y buscar la prenda que quieras, una vez que te decidiste la agregas al carrito.
                </p>
                <p>
                    Tené en cuenta que debajo de las imágenes tenés una descripción detallada y el talle de la prenda. Si queres retirarlo por casa, podemos coordinar la entrega vía mail o en nuestro <a href='https://www.instagram.com/cara.arg/' target='_blank' rel="noreferrer"> INSTAGRAM</a>.
                </p> 
            </div>
            </div>
        </>
    )
}

export default Inicio