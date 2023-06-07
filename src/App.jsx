import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import NavBar from './components/NavBar/NavBar';
import CartDisplay from './components/CartDisplay/CartDisplay'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Contacto, GuiaDeMedidas, Inicio, Productos, QueOndaCara} from './pages/index'
import { CartProvider } from './contexts/CartContext';
import Tasks from './tasks/Tasks';
import TaskDetail from './tasks/TaskDetail';
import UserFormContainer from './components/UserFormContainer/UserFormContainer';
import { OrderProvider } from './contexts/OrderContext';

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
      <OrderProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/que-onda-cara' element={<QueOndaCara/>}></Route>
          <Route path='/products' element={<Tasks/>}></Route>
          <Route path='/products/:category' element={<Tasks/>}></Route>
          <Route path='/product/:id' element={<TaskDetail/>}></Route>
          <Route path='/size-guide' element={<GuiaDeMedidas/>}></Route>
          <Route path='/contact' element={<Contacto/>}></Route>
          <Route path='/cart' element={<CartDisplay/>}></Route>
          <Route path='/form' element={<UserFormContainer/>}></Route>
        </Routes>
      </OrderProvider>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
