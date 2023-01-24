import React, {useState}  from 'react'
import "../Styles/Caroussel.css"
import arrow_left from "../assets/arrow_left.png"
import arrow_right from "../assets/arrow_right.png"

export default function Caroussel ({images}) {

    const [currImg, setCurrImg] = useState(0);

    return (
        <div className="caroussel">
            <div className="carousselInner"
             style={{ backgroundImage: `url(${images[currImg]})`}}>
            
                <div className="left" onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
                }}>
                    <img src={arrow_left} alt="Suivante"/>
                </div>

                <div className="right" onClick={() => {
                    currImg < images.length -1 && setCurrImg(currImg + 1);
                }}>
                    <img src={arrow_right} alt="Précédente"/>
                </div>
            </div>
        </div>

    )
}