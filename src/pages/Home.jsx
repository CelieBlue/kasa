import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Bienvenue sur votre site Kasa</h1>
      <Link to="/Accomodation/1">Accommodation 1</Link>
      <br />
      <Link to="/Accomodation/2">Accommodation 2</Link>
    </>
  )
}