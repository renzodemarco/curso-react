import Item from "../Item/Item";

function ItemList({products, category}) {

    return (
        <>
            {products.length > 0 &&
                products.map(product => {
                    return (
                        <Item product={product} key={product.id}/>)
                })
            }
        </>
    )
}
export default ItemList;