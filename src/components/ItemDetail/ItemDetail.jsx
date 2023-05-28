import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from 'react-bootstrap'
import CartContext from '../../contexts/CartContext'
import { useContext, useState } from 'react'

const ItemDetail = ({item}) => {

    const {cart, addToCart} = useContext(CartContext)
    const [quantity, setQuantity] = useState(1);

    console.log(cart);

    const addCount = () => {
        if (quantity < item.stock)
            setQuantity(previousQuantity => previousQuantity + 1)
    }

    const susCount = () => {
        if (quantity > 1)
            setQuantity(previousQuantity => previousQuantity - 1)
    }

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
                    <ItemCount stock={item.stock} handleAddCount={addCount} handleSusCount={susCount} count={quantity}/>
                    <Button className='addToCart' onClick={() => addToCart(item, quantity)} >Agregar al carrito</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail