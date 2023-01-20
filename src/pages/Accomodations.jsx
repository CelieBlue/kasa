import React from 'react'
import accomodations from '../logements.json'
import { useParams, useLoaderData } from 'react-router-dom'
import Collapsible from "../Components/Collapsible"
// import Slider from "../Components/Slider"
import '../Styles/Accomodation.css'


export async function loader() {
    return accomodations;
}

export default function Accomodation() {
    const accomodations = useLoaderData();

// Methode find() to find the id that is send in the URL 
//and compare it to the id in the data
    const params = useParams();
    const accomodationInfos = accomodations.find((accomodation) =>
        accomodation.id === params.id);
        console.log(params.id);
        
    return (
        <>
                <div className="accomodation">
                        <div key={accomodationInfos.id}>

{/**************** SLIDESHOW *****************/}              
                            <div className="slideshow">
                                <img src={accomodationInfos.cover} alt="logement " />
                            </div>
                        
{/**************** INFOS ACCOMODATIONS *****************/}  
                        {/* <div className="infos">
                            <div className="infos_bloc_one">
                                <h1>{accomodationInfos.title}</h1>
                                <div className="location">
                                    {accomodationInfos.location}
                                </div>
                                <ul>
                                    <li>{accomodationInfos.tags}</li>
                                </ul>
                            </div> */}

{/****** HOST & AVATAR & RATING *******/}
                        {/* <div className="infos_bloc_two">
                            <div className="host">
                                <span className="name">{accomodationInfos.host}</span>
                                <div className="avatar">
                                    <img src={accomodationInfos.picture} alt="hôte"/>
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
                    </div> */}

{/**************** DESCRIPTION & EQUIPMENT *****************/}  
                    <div className="infos_more">
                        <Collapsible label="Description">
                            <p>{accomodationInfos.description}</p>
                        </Collapsible>
                        <Collapsible label="Equipments">
                            <p>{accomodationInfos.equipment}</p>
                        </Collapsible>
                    </div>
                </div>

            </div>
        </> 
    )
}