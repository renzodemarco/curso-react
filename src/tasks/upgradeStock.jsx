import {updateDoc, collection, getFirestore} from 'firebase/firestore'

const createUser = async (items) => {

    const db = getFirestore();
    const itemCollection = collection(db, "stock-prendas", items.id);

    // const {id} = await updateDoc(userCollection, items);

    writeItemStock = await () => {
        const oldStock = itemCollection.stock
        const newStock = {stock: oldStock - items.quantity}

    } 

    updateDoc(itemCollection)

    return id
}

export default createUser;