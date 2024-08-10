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

                        </>
                    )

                })}
            </section>
        </>
    )
}

export default Dogs
