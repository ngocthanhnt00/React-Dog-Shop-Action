import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='navbar no-underline'>
                <Link to={`/`}>Home</Link>
                <Link to={`/dogs`}>Dogs</Link>
                <Link to={`/checkout`}>Cart</Link>
            </nav>
        </>
    )
}

export default Navbar
