import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from 'react-bootstrap'
import {CartContext} from '../../contexts/CartContext'
import { useContext, useState } from 'react'
import { Success } from '../Alerts/Alerts'

const ItemDetail = ({item}) => {

    const {addToCart} = useContext(CartContext)
    const [quantity, setQuantity] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    
    const addCount = () => {
        if (quantity < item.stock)
            setQuantity(previousQuantity => previousQuantity + 1)
    }

    const susCount = () => {
        if (quantity > 1)
            setQuantity(previousQuantity => previousQuantity - 1)
    }

    const handleClick = () => {
        addToCart(item, quantity);
        setShowAlert(true)
    }

    return (
        <div className='detail'>
            <div className='imgContainer'>
            <img src={item.photo} alt={item.title}/>
            </div>
            <div className='detailContainer'>
                <h1 className='item-title'>{item.title}</h1>
                <p>{item.description}</p>
                <p>Tamaño: <span>{item.size}</span></p>
                <p>ID: {item.id}</p>
                <h2>${item.price}</h2>
                <div className='addContainer'>
                    <ItemCount stock={item.stock} handleAddCount={addCount} handleSusCount={susCount} count={quantity}/>
                    <Button 
                    className='addToCart' 
                    onClick={handleClick}>Agregar al carrito</Button>
                    {showAlert && <Success msg={"El producto se ha agregado al carrito"}/>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail