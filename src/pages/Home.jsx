import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bannerHome from '../assets/bannerHome.png';
// import pictureDefault from '../assets/logement_default.jpg'
import '../Styles/Layout.css'
import '../Styles/Home.css';

// const homeLoader = async () => {
//   const data = getSomeData();
//   return json(data);
// };

export const loader = async() => {
  const res = await fetch("http://localhost:3000/accomodations.json");
  const data = await res.json();
  return data;
}

export default function Home() {
  const accomodations = useLoaderData();

  return (
  <> 
      <div className="banner">
        <img src={ bannerHome } alt="bannière paysage" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
       
    {accomodations.length > 0 ? (
      <div className="accomodations">
        {accomodations.map((accomodation) => (
          <Link to={`accomodations/${accomodation.id}`}>
            <div className="card" key={`accomodation${accomodation.id}`}>
              <img src={ accomodation.cover } alt="Illustration par défaut" />
              <h2>Titre de la location</h2>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <p>Il n'y a pas d'hébergement pour le moment</p>
    )}
  </>
  );
}