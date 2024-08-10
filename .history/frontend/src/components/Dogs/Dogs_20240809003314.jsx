import React from 'react'
import DogCard from './DogCard';
const Dogs = (props) => {
    const { allDogs } = props;
    console.log(allDogs, "SSS")
    return (
        <>
            <section>
                {allDogs.map((item) => {
                    return (
                        <>
                            <DogCard id={item.id} name={item.name} breed={item.breed} description={item.description} price={item.price} />
                        </>
                    )

                })}
            </section>
        </>
    )
}

export default Dogs
