import React, { useContext, useState } from 'react'
import "./dogs.css"
import CartContext from '../../Contexts/CartContext';
const DogCard = (props) => {
    const { id, name, breed, description, price, imageUrl } = props;
    const { addToCart } = useContext(CartContext);
    const [isAdded, setAdded] = useState(false)
    const handleClick = () => {
        setAdded(true)
    }
    return (
        <>
            <section className='dogs'>
                <div className='dogs-info'>
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>
                <div className='dogs-img-container'>
                    <img className='dog-img' src={imageUrl} alt={imageUrl} />
                </div>
                <div className='dogs-desc'>{description}</div>
                <div className='dogs-price'>{price}</div>
                {isAdded ? (
                    <button className='dogs-btn-disabled'>ADDED</button>
                ) : (
                    <button className='dogs-btn' onClick={handleClick}>ADD TO CART</button>
                )}
            </section>
        </>
    )
}

export default DogCard
