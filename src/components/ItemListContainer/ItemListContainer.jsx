import ItemList from "../ItemList/ItemList";
import {getProducts} from "../../functions/getProducts";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './ItemListContainer.css'


function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        getProducts()
            .then(res => {
                if (category) {
                    setProducts(res.filter(prod => prod.category === category))
                } else {
                setProducts(res)
                }
            })
    }, [category])

    return (
        <div className="itemListContainer">
        <ItemList products={products} category={category}/>
        </div>
    )
}

export default ItemListContainer;