import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/Pages/Home" element={<Home/>} />
      <Route path="/Pages/About" element={<About/>} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

