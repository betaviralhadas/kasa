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
    const { title, description, host, rating, location, equipments, tags } = housing || {}
    if (!housing) {
        return <Navigate to="*" />
    }
    return (
        <main>
            {<Carousel />}
            <div className="house">
                <div>
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                    <div className="tag">
                        {tags.map((tag, index) => {
                            return (
                                <p key={index}>
                                    {tag}
                                </p>
                            )
                        })}
                    </div>
                    {/*<div className="collapseDescription">
                        
                    </div>*/}
                </div>

                <div>
                    <div className="host">
                        <p>{host.name}</p>
                        <img src={host.picture} alt="photo" />
                    </div>
                    <div className="star">{<Star rate={rating} />}</div>
                    
                </div>
            </div>
            <div className="collapseHousing">
                <div className="collapseDescription">
                        {<Collapse
                            title="Description"
                            description={<p>{description}</p>} />}
                </div>
                <div className="equipments">
                    {<Collapse
                            
                            title="Equipements"
                            description={<ul>{equipments.map((equipement) => {
                                return <li key={`${equipement}`}>{equipement}</li>
                            })}</ul>} />}
                </div>
                        
            </div>
        </main>
    );
}
export default Housing;