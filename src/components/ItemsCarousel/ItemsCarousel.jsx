import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ItemsCarousel.css'
import { Link } from 'react-router-dom';

const ItemsCarousel = ({ products }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='container' activeIndex={index} onSelect={handleSelect}>
            {products.map(item => {
                return (<Carousel.Item className="carouselContainer" key={item.id}>
                    <img
                        className="carouselPhoto"
                        src={item.photo}
                        alt={item.title}
                    />
                    <Carousel.Caption className='carouselCaption'>
                        <Link to={`/item/${item.id}`}>
                            <button className='carouselVer'>
                                Ver detalle
                            </button>
                            </Link>
                        <h2 className='carouselTitle'>{item.title}</h2>
                        <p className='carouselPrice'>${item.price}</p>
                    </Carousel.Caption>
                </Carousel.Item>)
            })}
        </Carousel>
    );
}

export default ItemsCarousel