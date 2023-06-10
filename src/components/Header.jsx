import React from "react";
import Logo from "../img/LogoKasa.png"
import { NavLink } from 'react-router-dom'

// funcao
const Header = () => {
    return (
        <header className="headers">
            
            <img
                className="logo" src= {Logo} alt="LogoKasa"></img>
            <nav>
                <ul className="navigation">
                    <li className="linknavigation"><NavLink to='/'>Accueil</NavLink> </li>
                    <li className="linknavigation"><NavLink to='/about'>A Propos</NavLink></li>
                </ul>
            </nav>
        </header> 
    )
}

export default Header // para poder exportar noutro ficheiros