import React, { useState } from "react";
import arrow from "../img/arrow.png"
import '../style/components/_Collapse.scss'

const Collapse = ({ title, description }) => {
    const [open, setopen] = useState(false)
    return (
        <div className="button" id={`collapse${title}`}>
            <div className="titlearrow" onClick={() => setopen(!open)}>
                <div className="title">{title}</div>
                <a href={`#collapse${title}`}>
                    <img src={arrow} alt="arrow" />
                </a>
            </div>
            {open && <div className="description">{description}</div>}
        </div>
    )
}
export default Collapse

/*A função Collapse é definida como um componente de função que recebe as props title e description
(5) onde criei uma variavel, pa definir o estado dos elementos
O estado open e a função setopen são definidos utilizando o hook useState
o estado open guarda o valor actual e o setopen é o valor k muda
O valor inicial de open é false, 

(8)O componente retorna uma div com a ID definida como collapse${title} para ser usado como âncora
(9)O evento onClick está definido como uma função de seta que chama setopen(!open), invertendo o valor do 
estado open
(10) exibe o título recebido por meio das props
(11-13)elemento <a> com o atributo href definido como #collapse${title}, que cria um link para a âncora 
correspondente
Dentro do elemento <a>, há uma imagem seta

é feita uma verificação condicional usando open. Se open for true, ou seja, se o colapso estiver aberto, exibe a 
descrição recebida por meio das props

o componente Collapse é exportado para ser usado em outros componentes
*/
