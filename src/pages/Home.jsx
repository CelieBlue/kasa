import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bannerHome from '../assets/bannerHome.png';
import Card from '../Components/Card'
import '../Styles/Layout.css'
import '../Styles/Home.css';

//fetch the data from the json file and return data
export const loader = async() => {
  const res = await fetch(`http://localhost:3000/accomodations.json`);
  const data = await res.json();
  return data;
}

//This function retrieves the data by using userLoaderdata and assigns them to the corresponding values
export default function Home() {
  const accomodations = useLoaderData();

  return (
  <> 
      <div className="banner">
        <img src={ bannerHome } alt="bannière paysage" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <div>
        {accomodations.length > 0 ? (
        <div className="accomodations">
          {accomodations.map((accomodation) => (
          
          <Link to={`/Accomodations/${accomodation.id}`}>
              <Card
                key={`props${accomodation.id}`}
                img={accomodation.cover}
                title={accomodation.title}
              />
          </Link>

        ))}
        </div>
       ) : (
        <p>Il n'y a pas d'hébergement pour le moment</p> 
      )}
     </div>
      
  </>
  );
}