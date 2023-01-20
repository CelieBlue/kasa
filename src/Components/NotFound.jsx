import React from 'react';
import { Link } from 'react-router-dom';
// import '../Styles/Layout.css';
import '../Styles/NotFound.css'

export default function Error() {
    return(
        <div className="error">
            <div className="error_number">
                404
            </div>
            <div className="oups">Oups ! La page que vous demandez n'existe pas.</div>
            <div className="link_home"><Link to="/">Retourner sur la page d’accueil</Link></div>
        </div>
    )
}