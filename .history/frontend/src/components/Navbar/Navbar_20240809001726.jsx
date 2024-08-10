import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <Link className='' to={`/`}>Home</Link>
                <Link to={`/dogs`}>Dogs</Link>
                <Link to={`/checkout`}>Cart</Link>
            </nav>
        </>
    )
}

export default Navbar
