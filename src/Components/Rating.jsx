import React from 'react'
// import star_red from '../assets/star_red.png'
// import star_grey from '../assets/star_grey.png'

export default function StarRating({rating}) {

    const stars = [1, 2, 3, 4, 5];

    const redStyle = {
        color: 'var(--corail)',
    }

    const greyStyle = {
        color: 'var(--cleargrey)',
    }

    return (

//Use a conditional operator (?) with two conditions.
//One condition is true
        <div>
            {stars.map((star) =>
                rating >= star ? (
                    <span key={star.toString()} style={redStyle}>&#9733;</span>
                ) : (
                    <span key={star.toString()} style={greyStyle}>&#9733;</span>
                )
            )}
        </div>

        // <div>
        //     {stars.map((star) =>
        //         rating >= star ? (
        //             <img key={star.toString()}
        //                 src={star_red} alt="vote" />
        //         ) : (
        //             <img key={star.toString()}
        //                 src={star_grey} alt="sans vote" />
        //         )
        //     )}
        // </div>
    );
}