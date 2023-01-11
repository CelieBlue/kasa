import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Layout.css';

export default function Error() {
    return(
        <div className="error">
            <div className="errorNumber">
                404
            </div>
            <h1>Oups ! La page que vous demandez n'existe pas.</h1>
            <p><Link to="/">Retourner sur la page d’accueil</Link></p>
        </div>
    )
}