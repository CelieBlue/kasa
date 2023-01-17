import React from 'react'
import bannerAbout from '../assets/bannerAbout.png';
import Collapsible from "../Components/Collapsible";
import '../Styles/Layout.css'
import '../Styles/About.css'

export default function About() {
    return(
        <> 
            <div className="banner">
                <img src={ bannerAbout } alt="bannière paysage" />
            </div>
            <div className="collapsible_container">
                <Collapsible label="Fiabilité">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Collapsible>
                <Collapsible label="Respect">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapsible>
                <Collapsible label="Service">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Collapsible>
                <Collapsible label="Sécurité">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapsible>
            </div>
        </>
    )
}