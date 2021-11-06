//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './resources/Lightsaber.js'
import Lightsaber from './resources/Lightsaber.js';

function App() {

  const [saberColor, setSaberColor] = useState("#ff0044");
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
      <Lightsaber 
          bladeColor = {saberColor}
      />
      <button onClick={() => {
        setToggle(!toggle)
        setSaberColor(toggle ? "#00FF00" : "#ff0044")
        
      }
        }>Change Color</button>
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
