import React from 'react';
import accomodations from '../logements.json'
import { useParams, useLoaderData } from 'react-router-dom';
import Collapsible from "../Components/Collapsible";
import '../Styles/Accomodation.css';


export async function loader() {
    return accomodations;
}

export default function Accomodation() {
    const accomodations = useLoaderData();

// Methode find() to find the id that is send in the URL 
//and compare it to the id in the data
    const params = useParams();
    const accomodationInfos = accomodations.find(accomodation =>
         accomodation.id === params.id);

    return (
        <>
        
        <div>  
            {accomodationInfos.length > 0 ? (
                <div className="accomodation">
                    {accomodationInfos.map((accomodation, index) => (
                        <div key={accomodation.id}>

{/**************** SLIDESHOW *****************/}              
                        <div className="slideshow">
                            <img src={accomodation.cover} alt="logement " />
                        </div>
                        
{/**************** INFOS ACCOMODATIONS *****************/}  
            <div className="infos">
                <div className="infos_bloc_one">
                    <h1>{accomodation.title}</h1>
                    <div className="location">
                       {accomodation.location}
                    </div>
                    <ul>
                        <li>{accomodation.tags}</li>
                    </ul>
                </div>

{/****** HOST & AVATAR & RATING *******/}
                <div className="infos_bloc_two">
                    <div className="host">
                        <span className="name">{accomodation.host}</span>
                        <div className="avatar">
                            <img src={accomodation.picture} alt="hôte"/>
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

{/**************** DESCRIPTION & EQUIPMENT *****************/}  
            <div className="infos_more">
                {/* <div className="title_infos_more">
                    <h2>Description</h2>
                    <p>Vous serez à 50m du canal Saint-martin...</p>
                </div>
                <div className="title_infos_more">
                    <h2>Equipements</h2>
                    <ul>
                        <li>Climatisation</li>
                        <li>Wi-fi</li>
                    </ul>
                </div> */}
                <Collapsible label="Description">
                    <p>{accomodation.description}</p>
                </Collapsible>
                <Collapsible label="Equipments">
                    <p>{accomodation.equipment}</p>
                </Collapsible>
            </div>
            </div>))
            }
        </div>
            ) : (
                <p>Il n'y a pas d'informations sur ce logement pour le moment</p>
            )};
        </div>
        </> 
    )
}