import React from 'react'
import { Link } from 'react-router-dom'
import logements from '../logementsAnnonces.json'
import '../style/components/_Cards.scss'

function Cards() {
    return (
        <section className="housingGallery">
            {logements.map((logement) => (
                <Link
                    to={`/Housing`}
                    className="housingItems"
                    key={logement.id}
                >
                    <img
                        src={logement.cover}
                        alt="annonce de logement en location"
                        className="housingImg"
                    />
                    <h3 className="housingTitle">{logement.title}</h3>
                </Link>
            ))}
        </section>
    )
}
export default Cards