import React from 'react'

const Dogs = (props) => {
    const { allDogs } = props;
    console.log(allDogs, "SSS")
    return (
        <div>
            This is a dogs page
        </div>
    )
}

export default Dogs
