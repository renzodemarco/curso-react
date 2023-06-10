import {useState, useEffect} from "react"
import { getSomeItems } from "../../services/services";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";

const ItemsCarouselContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getSomeItems().then(items=> {
            setItems(items)
        })
    }, [])
    

    return (
        <>
            <ItemsCarousel products={items}/>
        </>
    )
}

export default ItemsCarouselContainer