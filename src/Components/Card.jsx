import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

export default function Card({ title }) {
    return (
        <div className="card">
            <span><Link to="/Accomodation/1">{title}</Link></span>
        </div>
    )
}