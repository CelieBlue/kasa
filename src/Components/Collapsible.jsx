import React, {useState} from "react";
import arrow_down from "../assets/arrow_down.png"
import "../Styles/Collapsible.css";

export default function Collapsible(props){
const [isOpen, setIsOpen] = useState(false)

    return (
        
        <div className="collapsible">
            <div className="toggle" onClick={() => 
                setIsOpen(!isOpen)}>
                {props.label}
                <img src={arrow_down} alt="ouvrir"/>
            </div>
            { isOpen && 
            <div className="text_content">
                {props.children}
            </div>
            }
        </div>
    );
}