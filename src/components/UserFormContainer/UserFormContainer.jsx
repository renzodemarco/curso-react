import React, { useContext, useState} from 'react'
import UserForm from '../UserForm/UserForm'
import { CartContext } from '../../contexts/CartContext';
import {createTasks} from '../../services/services'
import PurchaseSuccessModal from '../PurchaseSuccessModal/PurchaseSuccesModal';
import { OrderContext } from '../../contexts/OrderContext';

const UserFormContainer = () => {

    const {cart, setCart, totalPrice, getDate, summarizeItems} = useContext(CartContext);
    const {setOrderId} = useContext(OrderContext);

    const [success, setSuccess] = useState(false);

    const items = summarizeItems(cart);

    const onSend = async (buyer) => {
        const date = getDate();
        const total = totalPrice();
        const data = {buyer, date, total, items}
        const response = await createTasks(data);

        if (response.success) {
            setOrderId(response.id);
            setCart([])
            setSuccess(true)
        } 
        
        return response.success
    }

    return (
        <>
            {!success ? 
            <UserForm onSend={onSend}/>
            : <PurchaseSuccessModal />}
        </>
    )
}

export default UserFormContainer