import React from "react";
import { Navigate, useParams } from "react-router-dom";
import housings from "../logementsAnnonces.json";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Star from "../components/Stars";
import '../style/pages/_Housing.scss';

const Housing = () => {
    const { id } = useParams()
    const housing = housings.find((appart) => appart.id === id)
    const {title, description, host, rating, location, equipments, tags} = housing || {}
    if(!housing) {
        return <Navigate to = "*" />
    }
    return (
        <main>
            {<Carousel />}
            <div>
                <div>
                    <h1>{title}</h1>
                    <h2>{location}</h2>



                </div>
            </div>
        </main>
    );
}
export default Housing;