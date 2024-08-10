import React from 'react'

const Dogs = (props) => {
    const { allDogs } = props;
    console.log(allDogs, "SSS")
    return (
        <>
            <section>
                {allDogs.map((item) => {
                    return (
                        <>
                            <div key={item.id}>{item.name}</div>
                        </>
                    )

                })}
            </section>
        </>
    )
}

export default Dogs
