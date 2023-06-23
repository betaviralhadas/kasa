import React from 'react'
import { Link } from 'react-router-dom'
import housing from '../logementsAnnonces.json'
import '../style/components/_Cards.scss'

function Cards() {
    return (
        <section className="housingGallery">
            {housing.map((appart) => (
                <Link
                    to={`/Housing/${appart.id}`}
                    className="housingItems"
                    key={appart.id}
                >
                    <img
                        src={appart.cover}
                        alt="annonce de logement en location"
                        className="housingImg"
                    />
                    <h3 className="housingTitle">{appart.title}</h3>
                </Link>
            ))}
        </section>
    )
}
export default Cards