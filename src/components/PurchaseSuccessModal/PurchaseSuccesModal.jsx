import { Link } from 'react-router-dom';
import { OrderContext } from '../../contexts/OrderContext';
import { useContext } from 'react';
import './PurchaseSuccessModal.css'

const PurchaseSuccessModal = () => {

    const { orderId, setOrderId } = useContext(OrderContext)

    const handleClick = () => {
        setOrderId("")
    }

    return (
        <>
            <h1>¡Compra realizada con éxito!</h1>
            <div className='purchaseSuccessContainer'>
            <p>Utiliza el código <b>{orderId}</b> para realizar el seguimiento de tu compra.</p>
            <p>Gracias por comprar con CARA®.</p>
            <Link to='/'>
                <button className='goIndexButton' onClick={handleClick}>Regresar al Inicio</button>
            </Link>
            </div>
        </>
    )
}

export default PurchaseSuccessModal