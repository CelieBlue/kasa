import React from 'react';
import { useParams } from 'react-router-dom';

export default function Accomodation() {
    const {id} = useParams();
    return(
        <>
            <h1>Logement {id}</h1>
        </>
    )
}