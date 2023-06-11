import React from "react";
import Logo from "../img/LogoKasa.png"
import { NavLink } from 'react-router-dom'
import '../style/components/_Header.scss'

const Header = () => {
    return (
        <header className="headers">
            <img className="logo" src= {Logo} alt="LogoKasa"></img>
            <nav>
                <ul className="navigation">
                    <li className="linknavigation"><NavLink to='/'>Accueil</NavLink> </li>
                    <li className="linknavigation"><NavLink to='/about'>A Propos</NavLink></li>
                </ul>
            </nav>
        </header> 
    )
}
export default Header


/*importei o logo k se encontra no dossier

criei uma funcao header , onde tem a imagem e a barra de navegacao
e no fim exporto a funcao , para poder utilizar noutros ficheiros
*/