import React from "react";
import Footer from "../components/Footer"
import '../style/PropertyError.scss'

const Error = () => {
    return (
        <main>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p>Retourner sur la page d’accueil</p>
        </main>
    );
}
export default Error;