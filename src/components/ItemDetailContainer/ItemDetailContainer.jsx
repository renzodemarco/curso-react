import { useEffect, useState } from "react";
import { getProductById } from "../../functions/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const itemId = useParams().id;
    
    useEffect(() => {
        getProductById(itemId)
            .then(res => {
                setItem(res)
            })
    }, [itemId]);


    return (
        <div className="itemDetailContainer">
            {item && <ItemDetail item={item} /> }
        </div>
    )
}

export default ItemDetailContainer;