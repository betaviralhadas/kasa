import React from "react";
import fullStar from "../img/FullStar.png"
import emptyStar from "../img/EmptyStar.png"

const Star = (rating) => {
    const numberStar = [1, 2, 3, 4, 5]
    return numberStar.map((starElement, index) =>
        starElement <= rating.rate ? (
            <img key={index} src={fullStar} alt="fullstar"></img>
        ) : (<img key={index} src={emptyStar} alt="emptystar"></img>)
    )
}
export default Star;