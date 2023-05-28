import Button from 'react-bootstrap/Button';
import './ItemCount.css';

function ItemCount({ stock, count, handleAddCount, handleSusCount }) {

    return (
            <div className='contador'>
                <h2>Cantidad: {count}</h2>
                <div className='buttonContainer'>
                    <Button onClick={handleSusCount}>
                        -
                    </Button>
                    <Button onClick={handleAddCount}>
                        +
                    </Button>
                </div>
            <h3>Stock: {stock}</h3>
            </div>

    )
}

export default ItemCount