import React, { useState } from "react";
import { useParams } from "react-router-dom";
import arrowleft from "../img/arrow_left.png"
import arrowright from "../img/arrow.png"
import housing from "../logementsAnnonces.json"
import "../style/components/_Carousel.scss"

const Carousel = () => {
    const { id } = useParams() // e 1funcao k vai recuperar a id 
    const { pictures } = housing.find((appart) => appart.id === id)
    const [currentImg, setCurrentImg] = useState(0)
    const arrowLeft = () => {
        setCurrentImg(currentImg === 0 ? pictures.length - 1 : currentImg - 1)
    }
    const arrowRight = () => {
        setCurrentImg(currentImg === pictures.length - 1 ? 0 : currentImg + 1)
    }
    return (
        <section className="carousel">
            {
                pictures.length > 1 && (
                    <img className="arrowleft" src={arrowleft} alt="left" onClick={arrowLeft} />
                )
            }
            {
                pictures.length > 1 && (
                    <img className="arrowright" src={arrowright} alt="right" onClick={arrowRight} />
                )
            }
            {
                pictures.map((image, index) => {
                    return (
                        <div key={index}>
                            {index === currentImg && (
                                <img className="houseImg" src={image} alt="image"></img>
                            )}
                            {index === currentImg && pictures.length > 1 && (
                                <span className="pictureNumber">{currentImg + 1}/{pictures.length}</span>
                            )}
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Carousel

/* O componente importa as dependências necessárias das bibliotecas "react" e "react-router-dom", 
bem como as setas e o arquivo JSON contendo dados de habitação
criei uma função denominada Carrossel
onde criei uma variavel com useParams que é um hook do React Router qu é usado para extrair o parâmetro id da URL
Este parâmetro é usado para localizar os dados de habitação correspondentes da matriz de habitação no arquivo JSON
(9) uma variavel pictures Utilizando o método find do array housing, onde vai encontar a img do appart pela id
(10) uma variável de estado chamada currentImg e uma função para atualizá-la chamada setcurentimg, ambas inicializadas
 usando o hook useState e o valor inicial de currentImg é definido como 0, representando o índice da imagem atual

As funções arrowLeft e arrowRight são definidas para atualizar o estado currentImg com base na direção da seta clicada
 Se currentImg for igual a 0, a função arrowLeft define currentImg como o índice da última imagem
 Se currentImg for igual ao índice da última imagem, a função arrowRight define currentImg como 0

 O componente retorna uma seção que envolve o carrossel de imagens
A primeira verificação pictures.length > 1 é usada para exibir as setas de navegação apenas quando há mais de uma img
Se pictures.length for maior que 1, é renderizado a seta esquerda e um evento onClick que chama a função arrowLeft 
quando a seta é clicada
Da mesma forma, é renderizado a imagem da seta direita e um evento onClick que chama a função arrowRight quando a 
seta é clicada

Utilizando o método map no array pictures, estamos mapeando cada imagem para um elemento <div> com um key único
Dentro de cada <div>, a imagem é renderizada apenas se o index for igual ao currentImg, garantindo que apenas uma 
imagem seja exibida cada vez
Se index for igual a currentImg e pictures.length for maior que 1, um elemento <span> é renderizado para exibir a 
numeração da imagem atual em relação ao total de imagens

o componente Carousel é exportado para ser usado em outros componentes
*/