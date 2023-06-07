import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail/ItemDetail';


const TaskDetail = () => {

    const{ id }= useParams();

    const [task, setTask] = useState();
    const [msg, setMsg] = useState("Cargando...");

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, 'stock-prendas', id);
        getDoc(docRef).then(doc => {
            if (doc.exists()) {
                setTask({id:doc.id, ...doc.data()})
            } else {
                setMsg("No se ha encontrado el producto")
            }
        })
    }, [id])

    if (!task) return (msg);

    return (
        <>
            <ItemDetail item={task} />
        </>
    )
}

export default TaskDetail;