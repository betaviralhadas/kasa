import React from "react";
import banner from "../img/banner.png"


const Banner = () => { 
    return (
        <div className="banner">
            <img src={banner} alt="banner" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}
export default Banner;

/*importei a imagem do banner k ta no dossier
//criei uma funcao para o banner 
onde criei uma div k contem a img e o texto
e no fim exportei para poder utilizar noutros ficheiros
*/