import React from 'react'

const DogCard = (props) => {
    const { id, name, breed, desciption, price, imageUrl } = props;

    return (
        <>
            <section className='dogs'>
                <div className='dogs-info'>
                    <p>{name}</p>
                    <p>{name}</p>
                </div>
            </section>
        </>
    )
}

export default DogCard
