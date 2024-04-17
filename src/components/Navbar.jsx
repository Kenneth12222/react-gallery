import React, { useState } from 'react'
import './Navbar.css'
import Logo from './logo.png'
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div>
            <nav>
                <img src={Logo} className='logo' /> 
                <ul id='menu' className={menuOpen ? 'open' : ''}>
                    <div class="nav-search-container">
                        <div class="nav-search-label">
                            <i class="fas fa-images"></i>
                            <span>Photo</span>
                            <span href="" class="btn-form">Create</span>

                        </div>
                        <div class="nav-search">
                            <input type="text" id="search" placeholder="Search for free photos" />
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <i class="fas fa-times-circle" id='close' onClick={toggleMenu}></i>
                </ul>
                <a href="Join" class="nav-join">Join</a>
                <i class="fas fa-bars" id='menu-icon' onClick={toggleMenu}></i>
            </nav>
        </div>
    )
}

export default Navbar
