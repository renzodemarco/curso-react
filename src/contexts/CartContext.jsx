import { createContext, useEffect, useState } from "react"

export const CartContext = createContext();

const startingCart = JSON.parse(localStorage.getItem("cart")) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(startingCart);

    useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    const addToCart = (item, quantity) => {

        const newItem = { ...item, quantity };
        const newCart = [...cart]
        const isInCart = newCart.find(prod => prod.id === newItem.id)

        if (isInCart) {
            isInCart.quantity += quantity;
        }
        else {
            newCart.push(newItem)
        }
        setCart(newCart)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    const removeItem = (id) => {
        let newCart = [...cart]
        const itemToRemove = newCart.find(item => id === item.id);

        if (itemToRemove.quantity > 1) {
            itemToRemove.quantity--;
        }
        else {
            newCart = cart.filter(item => item.id !== id);
        }
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const summarizeItems = (array) => {
        return array.map(item => {
            return {
                id: item.id, 
                title: item.title, 
                quantity: item.quantity,
                price: item.price
            }
        })
    }

    const getDate = () => {
        let fechaActual = new Date();
    
        let dia = fechaActual.getDate();
        let mes = fechaActual.getMonth() + 1;
        let anio = fechaActual.getFullYear();
    
        return dia + "/" + mes + "/" + anio;
    }

    return (
        <CartContext.Provider value={{cart, setCart, addToCart, cartQuantity, totalPrice, removeItem, clearCart, getDate, summarizeItems}}>
            {children}
        </CartContext.Provider>
    )
}