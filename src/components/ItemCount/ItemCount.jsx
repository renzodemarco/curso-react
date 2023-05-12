import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock }) {
    const [count, setCount] = useState(0);

    const addCount = () => {
        if (count < stock)
            setCount(previousCount => previousCount + 1)
    }

    const susCount = () => {
        if (count > 0)
            setCount(previousCount => previousCount - 1)
    }

    return (
            <div className='contador'>
                <h2>Cantidad: {count}</h2>
                <div className='buttonContainer'>
                    <Button variant="secondary" onClick={susCount}>
                        -
                    </Button>
                    <Button variant="secondary" onClick={addCount}>
                        +
                    </Button>
                </div>
            <h3>Stock: {stock}</h3>
            </div>

    )
}

export default ItemCount