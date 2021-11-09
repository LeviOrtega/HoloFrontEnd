
import React from 'react';
import './App.css';
import {BladeColors, HiltColors, RobeColors, EyeColors, SkinColors} from './resources/Colors';
import CharacterCreate from './CharacterCreate';

class App extends React.Component {
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  render() {
    return (
      <div className="App" >
        <CharacterCreate 
        bladeColor={BladeColors[this.getRandomInt(6)]}
        hiltColor={HiltColors[this.getRandomInt(3)]}
        robeColor={RobeColors[this.getRandomInt(6)]}
        eyeColor={EyeColors[this.getRandomInt(6)]}
        skinColor={SkinColors[this.getRandomInt(6)]}
        />

      </div>
      
    );
    }
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
