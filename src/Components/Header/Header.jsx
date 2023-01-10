import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link> 
            </div>
            
        </nav>
    )
}