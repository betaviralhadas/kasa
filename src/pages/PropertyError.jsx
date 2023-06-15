// Error Page

import React from "react";
import '../style/pages/_PropertyError.scss'
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <main className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to={`/`}><p>Retourner sur la page d'accueil</p></Link>
        </main>
    );
}
export default Error;