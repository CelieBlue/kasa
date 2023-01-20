import React from 'react';
import accomodations from '../logements.json'
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Components/Banner'
import bannerHome from '../assets/bannerHome.png';
import Card from '../Components/Card'
import '../Styles/Home.css';


export async function loader() {
    return accomodations;
}

//This function retrieves the data by using userLoaderdata and assigns them to the corresponding values
export default function Home() {
  const accomodations = useLoaderData();
  
  return (
  <> 
      <h1>Chez vous, partout et ailleurs</h1>

      <Banner 
        img={ bannerHome }
      />

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