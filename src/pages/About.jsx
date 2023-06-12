import React from "react";
import ImgAbout from "../img/about.png"
import '../style/pages/_About.scss'
import Collapse from "../components/Collapse";

const AboutPage = () => {
    return (
        <main>
            <div>
                <img src={ImgAbout} alt="ImgAbout" />
            </div>
            <section>
                <Collapse 
                title="Fiabilité" 
                description={
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                }/>
                <Collapse 
                title="Respect" 
                description={
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
                }/>
                <Collapse 
                title="Service" 
                description={
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
                }/>
                <Collapse 
                title="Sécurité" 
                description={
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                }/>
            </section>
        </main>
    );
}
export default AboutPage;

/*criei uma funcao k contem a img (k a importei em cima)
dps criei uma seccao k contem os botoes, e pa cada botao xamei o componente collapse com o titulo e a descricao
e no fim exporto a funcao
*/