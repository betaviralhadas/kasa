import React, { useState } from "react";
import { useParams } from "react-router-dom";
import arrowleft from "../img/arrow_left.png"
import arrowright from "../img/arrow.png"
import housing from "../logementsAnnonces.json"

const Carousel = () => {
    const { id } = useParams() // e 1funcao k vai recuperar a id 
    const { pictures } = housing.find((appart) => appart.id === id)
    const [curentimg, setcurentimg] = useState(0)
    const arrowLeft = () => {
        setcurentimg(curentimg === 0 ? pictures.length - 1 : curentimg - 1)
    }
    const arrowRight = () => {
        setcurentimg(curentimg === pictures.length - 1 ? 0 : curentimg + 1)
    }
    return (
        <section>
            {
                pictures.length > 1 && (
                    <img src={arrowleft} alt="left" onClick={arrowLeft} />
                )
            }
            {
                pictures.length > 1 && (
                    <img src={arrowright} alt="left" onClick={arrowRight} />
                )
            }
            {
                pictures.map((image, index) => {
                    return (
                        <div key={index}>
                            {index === curentimg && (
                                <img className="" src={image} alt="image"></img>
                            )}
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Carousel

