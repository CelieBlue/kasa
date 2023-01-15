import React from 'react'
import bannerAbout from '../assets/bannerAbout.png';
import '../Styles/Layout.css'

export default function About() {
    return(
        <> 
            <div className="banner">
                <img src={ bannerAbout } alt="bannière paysage" />
            </div>
        </>
    )
}