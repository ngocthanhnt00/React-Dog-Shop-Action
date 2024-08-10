import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>

                <Link to={`/`}>Home</Link>
                <Link to={`/dogs`}>Dogs</Link>
                <Link to={`/checkout`}>Dogs</Link>
            </nav>
        </>
    )
}

export default Navbar
