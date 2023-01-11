import * as React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';


export default function Header() {
    return (
        <div className="header">
        <div className="logo">
            Logo Kasa
        </div>
        <nav>
            
                <NavLink to="/" className={({isActive}) =>
                    isActive ? "activeLink": ""}>Accueil</NavLink>
                <NavLink to="/About" className={({isActive}) =>
                    isActive ? "activeLink": ""}>A propos</NavLink> 
            
            
        </nav>
        </div>
    )
}