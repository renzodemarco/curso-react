import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Inicio = () => {
    return (
        <>
            <h1>Bienvenido/a a la web de CARA® moda circular</h1>
            <p className='bienvenida'>Desde la sección PRODUCTOS podes chusmear y buscar la prenda que quieras, una vez que te decidiste la agregas al carrito. Tene en cuenta que debajo de las imágenes, tenés una descripción detallada y las medidas necesarias para calcular el talle.
            Si queres retirarlo por casa, podemos coordinar la entrega vía mail o Instagram en www.instagram.com/cara.arg
            </p>
            <ItemListContainer/>
        </>
    )
}

export default Inicio