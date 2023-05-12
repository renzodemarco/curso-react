import { useParams } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Products = () => {

    let category = useParams().category;
    switch (category) {
        case 'abrigos': category = 'Abrigos'
            break;
        case 'camisas': category = 'Camisas'
            break;
        case 'vestidos': category = 'Vestidos'
            break;
        case 'chalecos': category = 'Chalecos'
            break;
        default: category = false;
    }

    return (
        <>
            <h1>Productos {category && ` / ${category}` }</h1>
            <ItemListContainer />
        </>
    )
}

export default Products