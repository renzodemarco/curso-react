import { addDoc, collection, getFirestore } from "firebase/firestore"

const setOrder = () => {
    
    const order = {
        buyer: { name:"Renzo", phone:"221349", email:"renzo@gmail.com"},
        items: [{id:"2ZB6hmwh2iYBE3aoTQFp", quantity}],
        total: 100
    }

    const db = getFirestore();

    const orderSelection = collection(db, "orders");

    addDoc(orderSelection, order).then(({id}) => setOrderId(id))

    return (
        <div>setOrder</div>
    )
}

export default setOrder