import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Contact, SizeGuide, Index, Products, QueOndaCara} from './pages/index'
import CartContext from './contexts/CartContext';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {

    const newItem = {...item, quantity};
    const newCart = [...cart]
    const isInCart = newCart.find(prod=> prod.id === newItem.id)

    if (isInCart) {
      isInCart.quantity += quantity;
    }
    else {
      newCart.push(newItem)
    }
    setCart(newCart);
  }

  const cartQuantity = () => {
    return cart.reduce((acc, prod)=> acc + prod.quantity, 0)
  }

  return (
    <>
    <BrowserRouter>
      <CartContext.Provider value={{cart, addToCart, cartQuantity}}>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/que-onda-cara' element={<QueOndaCara/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/products/:category' element={<Products/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/size-guide' element={<SizeGuide/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/cart' ></Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
