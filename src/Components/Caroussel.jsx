import React from 'react'
import "../Styles/Caroussel.css"

export default function Caroussel ({images}) {

    // const [currImg, setCurrImg] = useState(0);

    return (
        
        <div className="caroussel">
            <div className="carousselInner">
            { images.map((image, index) => {
                return (
                    <img  key={index} src={image} alt="caroussel_logement"/>
                )
            })}
            </div>
            

                        
            {/* style={{ backgroundImage: `url(${images[currImg].img})`}}> */}


            {/* </div> */}
        </div>
    )
}