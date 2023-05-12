import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Contact, SizeGuide, Index, Products, QueOndaCara} from './pages/exports'

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/que-onda-cara' element={<QueOndaCara/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/products/:category' element={<Products/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/size-guide' element={<SizeGuide/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        
    </BrowserRouter>
    </>
  );
}

export default App;
