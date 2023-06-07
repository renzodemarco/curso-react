import { collection, getFirestore, getDocs, addDoc, query, where } from "firebase/firestore";

const getTasks = async (category) => {

    const db = getFirestore();
    let itemsCollection;

    if (category) {
        itemsCollection = query(
            collection(db, 'stock-prendas'),
            where("category", "==", category));
    } else {
        itemsCollection = collection(db, 'stock-prendas');
    }
    
    const querySnapshot = await getDocs(itemsCollection);

    const items = querySnapshot.docs.map(doc=> (
        {id: doc.id, ...doc.data()}))

    return items;
}

const createTasks = async (data) => {

    const db = getFirestore();

    const taskCollection = collection(db, 'orders');

    try {
        const {id} = await addDoc(taskCollection, data);
        return {success: true, id}
    } catch (e) {
        return {success: false, e}
    }
}


export {getTasks, createTasks}

