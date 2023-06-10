import { collection, getFirestore, getDocs, addDoc, query, where, doc, getDoc, limit } from "firebase/firestore";

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

const getTaskById = async (id) => {
    
    const db = getFirestore();

    const docRef = doc(db, 'stock-prendas', id);

    const item = await getDoc(docRef);

    if (item.exists()) {
        return {id:item.id, ...item.data()}
    }

    return false
    } 

const getSomeItems = async () => {
    const db = getFirestore();
    const itemsCollection = query(
        collection(db, "stock-prendas"),
        limit(10)
    )

    const querySnapshot = await getDocs(itemsCollection)

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
    } 
    catch (e) {
        return {success: false, e}
    }
}


export {getTasks, createTasks, getTaskById, getSomeItems}

