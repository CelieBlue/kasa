import React from 'react';
// import { useParams } from 'react-router-dom';
import '../Styles/Layout.css'
import '../Styles/Accomodation.css';

export default function Accomodation() {
    // const {id} = useParams();
    return (
        <>
            <div className="slideshow">
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg" alt="logement 1" />
            </div>

            <div className="infos">
                <div className="infos_bloc_one">
                    <h1>Titre Logement</h1>
                    <div className="location">
                        Paris, Ile-de-France
                    </div>
                    <ul>
                        <li>Cozy</li>
                        <li>Canal</li>
                        <li>Paris 10</li>
                    </ul>
                </div>
                <div className="infos_bloc_two">
                    <div className="host">
                        <span className="name">Alexandre Dumas</span>
                        <div className="avatar">
                            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" alt="hôte"/>
                        </div>
                    </div>
                    <div className="rating">
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                    </div>
                </div>
            </div>

            <div className="infos_more">
                <div className="title_infos_more">
                    <h2>Description</h2>
                    <p>Vous serez à 50m du canal Saint-martin...</p>
                </div>
                <div className="title_infos_more">
                    <h2>Equipements</h2>
                    <ul>
                        <li>Climatisation</li>
                        <li>Wi-fi</li>
                    </ul>
                </div>
            </div>
        </>
    )
}