import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Collapsible from "../Components/Collapsible";
import '../Styles/Accomodation.css';

//fetch the data from the json file and return data
export const loader = async({params}) => {
    const id = params.id;
    const res = await fetch(`http://localhost:3000/accomodations.json/accomodations/${id}`);
    const data = await res.json();
    return data;
}

export default function Accomodation() {
    const accomodations = useLoaderData();

    return (
        <>
        {accomodations.length > 0 ? (
        <div className="accomodation">
            {accomodations.map((accomodation) => (
            <div>

{/**************** SLIDESHOW *****************/}              
            <div className="slideshow" key={`accomodations${accomodation.id}`}>
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
                <Collapsible label="Description">{accomodation.description}</Collapsible>
                <p></p>
                <Collapsible label="Equipments">{accomodation.equipment}</Collapsible>
                <p></p>
            </div>
            </div>))
            }
        </div>
            ) : (
                <p>Il n'y a pas d'informations sur ce logement pour le moment</p>
            )};
        </> 
    )
}