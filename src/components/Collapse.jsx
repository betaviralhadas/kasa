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
                    {/* ici, on change la classe de rotation de la flèche en fonction de l'état ouvert/fermé du collapse 
                       c'est un exemple de classe conditionnelle */}
                    <img src={arrow} alt="arrow" className={open ? "collapse-arrow-up" : "collapse-arrow-down"} />
                </a>
            </div>
            {open && <div className="description">{description}</div>}
        </div>
    )
}
export default Collapse