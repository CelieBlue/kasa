import React from 'react'
import accomodations from '../logements.json'
import { useParams, useLoaderData } from 'react-router-dom'
import Caroussel from "../Components/Caroussel"
import Rating from "../Components/Rating"
import Collapsible from "../Components/Collapsible"
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

    //Search for the tags in the array "tags" in the data of one product with the map() method
    const tagsAccomodation = accomodationInfos.tags.map((tags, index) => {
        return <li key={index}>{tags}</li>
    })
    //Search for the equipments in the array "equipments"
    const equipmentAccomodation = accomodationInfos.equipments.map((equipments, index) => {
        return <p key={index}>{equipments}</p>
    })
    
    return (
        <>
                <div className="accomodation" key={accomodationInfos.id}>
                        

{/* ******************** CAROUSSEL *********************/}
                                      
                                <Caroussel images={accomodationInfos.pictures}/> 
                                                       
{/**************** INFOS ACCOMODATIONS *****************/}  
                        <div className="infos">
                            <h1>{accomodationInfos.title}</h1>
                            <div className="infos_bloc_one">
                                <div className="location">
                                    {accomodationInfos.location}
                                </div>
                                <ul>
                                    {tagsAccomodation}
                                </ul>
                            </div>

{/**************** HOST & AVATAR & RATING ***************/}
                            <div className="infos_bloc_two">
                                <div className="host">
                                    <span className="name">{accomodationInfos.host.name}</span>
                                    <div className="avatar">
                                        <img src={accomodationInfos.host.picture} alt="hôte"/>
                                    </div>
                                </div>
                    
                                <div className="rating">
                                  <Rating rating={accomodationInfos.rating} />
                                </div>
                            </div>
                        </div>

{/*************** DESCRIPTION & EQUIPMENT ****************/}  
                    <div className="infos_more">
                        <Collapsible label="Description" className="infos_more_title">
                            <p>{accomodationInfos.description}</p>
                        </Collapsible>
                        <Collapsible label="Equipments" className="infos_more_title">
                            <p className='infos_more_equipment'>{equipmentAccomodation}</p>
                        </Collapsible>
                    </div>
                </div>

          
        </> 
    )
}