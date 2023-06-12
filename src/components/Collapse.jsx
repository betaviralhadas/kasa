import React, {useState} from "react";
import arrow from "../img/arrow.png"
import '../style/components/_Collapse.scss'

const Collapse = ({title, description}) => {
    const [open, setopen] = useState(false)
    return (
        <div className="button" id={`collapse${title}`}>
            <div className="titlearrow" onClick={()=> setopen(!open)}>
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

/*criei uma funcao collapse
(5) onde criei uma variavel, pa definir o estado dos elementos. 
open guarda o valor actual e o setopen é o valor k muda

*/
