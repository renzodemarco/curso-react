import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from 'react-bootstrap'

const ItemDetail = ({item}) => {
    return (
        <div className='detail'>
            <div className='imgContainer'>
            <img src={item.photos[0]} alt={item.title}/>
            </div>
            <div className='detailContainer'>
                <h1 className='item-title'>{item.title}</h1>
                <p>{item.description}</p>
                <p>Tamaño: <span>{item.size}</span></p>
                <h2>${item.price}</h2>
                <div className='addContainer'>
                    <ItemCount stock={item.stock} />
                    <Button className='addToCart'>Agregar al carrito</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail