import React from "react";
import Logo from "../img/LogoKasa.png"

//funcao
const Header = () => {
    return (
        <Header>
            <img 
                className="logo" src= {Logo} alt="LogoKasa"></img>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </Header>
    )
}
export default Header //para poder exportar noutro ficheiros