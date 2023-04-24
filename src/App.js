import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡BIENVENIDO A LA WEB DE CARA® MODA CIRCULAR!" />
    </>
  );
}

export default App;
