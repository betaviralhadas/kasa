import React from 'react'
import { Link } from 'react-router-dom'
import housing from '../logementsAnnonces.json'
import '../style/components/_Cards.scss'

function Cards() {
    return (
        <section className="housingGallery">
            {housing.map((appart) => (
                <Link
                    to={`/Housing/${appart.id}`}
                    className="housingItems"
                    key={appart.id}
                >
                    <img
                        src={appart.cover}
                        alt="annonce de logement en location"
                        className="housingImg"
                    />
                    <h3 className="housingTitle">{appart.title}</h3>
                </Link>
            ))}
        </section>
    )
}
export default Cards

/* O componente importa as dependências React e o Link do react-router-dom, bem como o arquivo 
JSON e o arquivo de estilo CSS 
criei uma função Cards
No retorno da função, há uma seção que envolve os cartões de habitação
O componente mapeia o array housing utilizando o método map
Para cada objeto appart no array, é renderizado um <Link> do react-router-dom
Cada <Link> representa um cartão de habitação, que contém uma imagem e um atributo src da imagem é definido 
como appart.cover, que é o caminho para a imagem de capa da habitação no objeto appart do JSON
e tambem há um elemento <h3>, que exibe o título da habitação (appart.title)
A chave key para cada <Link> é definida como appart.id, que é o valor único para cada habitação
Isso é importante para garantir um correto processamento e renderização dos elementos.
O componente é exportado como o valor padrão, permitindo que ele seja importado e usado em outras partes do aplicativo
*/