import React from 'react'

const Dogs = (props) => {
    const { allDogs } = props;
    console.log(allDogs, "SSS")
    return (
        <>
            <section>
                {allDogs.map((item) => {
                    return <li>{item.name}</li>
                })}
            </section>
        </>
    )
}

export default Dogs
