import React, { useState } from "react";
import { useParams } from "react-router-dom";
import arrowleft from "../img/arrow_left.png"
import arrowright from "../img/arrow.png"
import housing from "../logementsAnnonces.json"
import "../style/components/_Carousel.scss"

const Carousel = () => {
    const { id } = useParams()
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
                                <img className="houseImg" src={image} alt="house"></img>
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