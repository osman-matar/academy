import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
// import FaBurgerMenu from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';
import { FaBarsProgress } from 'react-icons/fa6';
const Header = () => {
    return (
        <header id='header'>
            <nav className='navbar'>
                <a href="#" className="logo">EduBridge</a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="account">
                <a href="#">Login</a>
                <a href="#" className='btn-join'>Join US <FaArrowRight/>  </a>
            </div>
            </nav>
        </header>
    )
}

export default Header;
