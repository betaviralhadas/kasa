import React from "react";
import fullStar from "../img/FullStar.png"
import emptyStar from "../img/EmptyStar.png"
import "../style/components/_Stars.scss"

const Star = (rating) => {
    const numberStar = [1, 2, 3, 4, 5]
    return numberStar.map((starElement, index) => 
        starElement <= rating.rate ? (
            <img key={index} src={fullStar} alt="fullstar"></img>
        ) : (<img key={index} src={emptyStar} alt="emptystar"></img>)
    )
}
export default Star;
/* tabela com 
recuperar os elementos
recura 1 e faz a comparacao 
recupera o numero em kestao (8)

A função Star é definida como um componente de função que recebe a propriedade rating.

A variável numberStar é definida como um array contendo os números de 1 a 5, representando as estrelas

A função map é chamada no array numberStar, que itera sobre cada elemento (starElement) e seu respectivo índice (index)
Dentro da função map, é feita uma verificação condicional para determinar se a estrela deve ser uma estrela cheia ou 
uma estrela vazia, com base na classificação (rating) recebida
Se starElement for menor ou igual à classificação rating.rate, é renderizado um elemento <img> com o atributo src 
definido como fullStar e o atributo alt definido como "fullstar". Isso representa uma estrela cheia.
Caso contrário, ou seja, se starElement for maior que a classificação rating.rate, é renderizado um elemento <img> com o atributo src definido como emptyStar e o atributo alt definido como "emptystar". Isso representa uma estrela vazia.
A função map retorna um novo array com os elementos <img> correspondentes às estrelas cheias e vazias.

o componente Star é exportado para ser usado em outros componentes
*/