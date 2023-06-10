import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { getTasks } from "../../services/services";


function ItemListContainer() {

    const {category} = useParams();

    const [tasks, setTasks] = useState();

    useEffect(() => {
        getTasks(category).then(tasks => {
            setTasks(tasks)})
    }, [category])
    
    if (!tasks) return (<h1>Cargando...</h1>);

    return (
        <div className="itemListContainer">
            <ItemList products={tasks}/>
        </div>
    )
}
export default ItemListContainer;