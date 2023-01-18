import React from 'react'
import '../Styles/Card.css';

export default function Card(props) {

    return (

        <>
              <div className="card">
                <img src={ props.img } alt="logement" />
                <h2>{ props.title }</h2>
              </div>
        </>
    )
}
