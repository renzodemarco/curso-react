import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { getTasks } from "../../services/services";


function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        getTasks('stock-prendas').then(products => {
            setProducts(products)})
    }, [])

    return (
        <div className="itemListContainer">
        <ItemList products={products} category={category}/>
        </div>
    )
}

export default ItemListContainer;