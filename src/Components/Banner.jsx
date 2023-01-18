import React from 'react'
import '../Styles/Banner.css';

export default function Banner(props) {

    return (

        <>
             <div className="banner">
                <img src={ props.img } alt="bannière paysage" />
            </div>
        </>
    )
}
