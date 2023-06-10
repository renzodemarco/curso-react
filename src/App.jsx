import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import NavBar from './components/NavBar/NavBar';
import CartDisplay from './components/CartDisplay/CartDisplay'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {GuiaDeMedidas, Inicio, Productos, QueOndaCara} from './pages/index'
import { CartProvider } from './contexts/CartContext';
import UserFormContainer from './components/UserFormContainer/UserFormContainer';
import { OrderProvider } from './contexts/OrderContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
      <OrderProvider>
        <NavBar/>
        <main>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/que-onda-cara' element={<QueOndaCara/>}></Route>
          <Route path='/products' element={<Productos/>}></Route>
          <Route path='/products/:category' element={<Productos/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/size-guide' element={<GuiaDeMedidas/>}></Route>
          <Route path='/cart' element={<CartDisplay/>}></Route>
          <Route path='/form' element={<UserFormContainer/>}></Route>
        </Routes>
        </main>
        <Footer/>
      </OrderProvider>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
