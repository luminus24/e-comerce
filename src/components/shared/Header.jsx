import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/headerStyles.css'

const Header = () => {

    return (
        <header className='header'>
            <NavLink to='/'><h1 className='header-logo'>e-commerce</h1></NavLink>
            <nav className="header-nav">
                <ul className="header-list">
                    <li className="header-items">
                        <NavLink className={({isActive}) => isActive ? 'active-link' : undefined} to='/login'>Login</NavLink>
                    </li>
                    <li className="header-items">
                        <NavLink className={({isActive}) => isActive ? 'active-link' : undefined} to='/purchases'>Purchases</NavLink>
                    </li>
                    <li className="header-items">
                        <NavLink className={({isActive}) => isActive ? 'active-link' : undefined} to='/cart'>Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header