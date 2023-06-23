import React from "react";
import banner from "../img/banner.png"
import '../style/components/_Banner.scss'

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="banner" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}
export default Banner;