import React from 'react';
import HomePage from './view/Homepage';
import Zenitsu from './view/Zenitsu';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HomePage />
      </div>
      <div id="zenitsu">
        <Zenitsu />
      </div>
      {/* Ajoutez ici les autres divs comme <div id="arc1">...</section> si nécessaire */}
    </div>
  );
}

export default App;
