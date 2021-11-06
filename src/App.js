//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './resources/Lightsaber.js'
import Lightsaber from './resources/Lightsaber.js';
import {BladeColors, HiltColors} from './resources/Colors';

function App() {

  const [index, setIndex] = useState(0);
  const [saberColor, setSaberColor] = useState(BladeColors[0]);
  const [hiltColor, setHiltColor] = useState(HiltColors[0])
  

  return (
    <div className="App">
      <header className="App-header">
      <Lightsaber 
          bladeColor = {saberColor}
          hiltColor = {hiltColor}
      />
        <button className="SaberToggle" onClick={() => {
          setIndex((index + 1) % 6)
          setSaberColor(BladeColors[index])
          
        }
          }>Change Color</button>

        <button className="HiltToggle" onClick={() => {
          setHiltColor(hiltColor === HiltColors[0] ? HiltColors[1] : HiltColors[0])
        }}>Change Hilt </button>
      </header>
      
    </div>
    
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
