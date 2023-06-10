import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { Link, useParams } from "react-router-dom";
import {getTaskById} from "../../services/services"

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState(null);
    const [msg, setMsg] = useState("Cargando...")
    const [fail, setFail] = useState(false)

    useEffect(() => {
        getTaskById(id).then(response => {
            if (response) {setItem(response)}
            else {
                setMsg("Lo sentimos, no se ha encontrado el producto");
                setFail(true);
            }
        })
    }, [id])

    if (!item) return (
        <>
            <h1>{msg}</h1>
            {fail && <Link to='/'>
                        <button className='goIndexButton'>Regresar al Inicio</button>
                    </Link>}
        </>   
    )

    return (
        <div className='itemDetailContainer' >
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;