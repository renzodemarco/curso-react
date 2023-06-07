import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import { OrderContext } from '../../contexts/OrderContext';
import { useContext } from 'react';

const Success = ({msg}) => {
    return (
        <Alert variant="success">
            {msg}
        </Alert>
    );
}

const PurchaseSuccess = () => {

    const {orderId, setOrderId} = useContext(OrderContext)

    const handleClick = () => {
        setOrderId("")
    }

    return (
        <div>
            <h1>¡Compra realizada con éxito!</h1>
            <p>Utiliza el código {orderId} para realizar el seguimiento de tu compra</p>
            <p>Gracias por comprar con CARA</p>
            <Link to='/'>
                <button onClick={handleClick}>Regresar al Inicio</button>
                </Link>
        </div>
    )
}

export {Success, PurchaseSuccess}