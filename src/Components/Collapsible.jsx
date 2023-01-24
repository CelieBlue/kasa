import React, {useState} from "react";
import arrow_down from "../assets/arrow_down.png"
import arrow_up from "../assets/arrow_up.png"
import "../Styles/Collapsible.css";

export default function Collapsible(props){
const [isOpen, setIsOpen] = useState(false)

const openCollapse = () => {
    setIsOpen((isOpen) => !isOpen)
} 

    return (

        <div className="collapsible">
            <div className="toggle" onClick={openCollapse}>
                <h2>{props.label}</h2>
                {!isOpen ? (<img src={arrow_down} alt="Collapse fermé"/>) : (<img src={arrow_up} alt="Collapse ouvert"/>)
            }
            </div>
            { isOpen && 
            <div className="text_content">
                {props.children}
            </div>
            }
        </div>
        
        // <div className="collapsible">
        //     <div className="toggle" onClick={() => 
        //         setIsOpen(!isOpen ? (<img src={arrow_down} alt="ouvrir"/>) : (<img src={arrow_up} alt="ouvrir"/>))}>
        //         {props.label}
        //         <img src={arrow_down} alt="ouvrir"/>
        //     </div>
        //     { isOpen && 
        //     <div className="text_content">
        //         {props.children}
        //     </div>
        //     }
        // </div>
    );
}