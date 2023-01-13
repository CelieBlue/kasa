import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

export default function Home() {
  return (
  <> 
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <div className="accomodation">
        <Link to="/Accomodation/1">
          <div className="card">
              <span>Titre de location</span>
          </div>
        </Link>

        <div className="card">
          <span><Link to="/Accomodation/2">Accommodation 2</Link></span>
        </div>
        <div className="card">
          <span><Link to="/Accomodation/3">Accommodation 3</Link></span>
        </div>
        <div className="card">
          <span><Link to="/Accomodation/4">Accommodation 4</Link></span>
        </div>
        <div className="card">
          <span><Link to="/Accomodation/5">Accommodation 5</Link></span>
        </div>
        <div className="card">
          <span><Link to="/Accomodation/6">Accommodation 6</Link></span>
        </div>
      </div>
  </>
  )
}