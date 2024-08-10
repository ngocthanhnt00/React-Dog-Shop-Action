import React, { useState } from 'react'
import "./dogs.css"
const DogCard = (props) => {
    const { id, name, breed, description, price, imageUrl } = props;
    const [isAdded, setAdded] = useState(false)
    const handleClick = () => {
        setAdded(!isAdded)
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
                <button className='dogs-btn' onClick={handleClick}>ADD TO CART</button>
            </section>
        </>
    )
}

export default DogCard
