//import logo from './logo.svg';
import React from 'react';
import './App.css';
import './resources/Lightsaber.js'
import Lightsaber from './resources/Lightsaber.js';
import {BladeColors, HiltColors} from './resources/Colors';
import BladeManager from './components/BladeManager';
import HiltManager from './components/HiltManager';

class App extends React.Component {
  constructor(props){
  super(props)
  this.state={
      bladeColor: BladeColors[5],
      hiltColor: HiltColors[1],
  }
}

  handleBladeChange(i){
    this.setState({
      bladeColor: BladeColors[i]
      
    })
  }

  handleHiltChange(i){
    this.setState({
      hiltColor: HiltColors[i]
    })
  }
  
  
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div className="Saber-Container">
            <Lightsaber 
                bladeColor = {this.state.bladeColor}
                hiltColor = {this.state.hiltColor}
            />
          </div>
          <div className="Asset-manager-container">
            <BladeManager className="Blade-color" onClick={(i) => this.handleBladeChange(i)}/>
            <HiltManager className="Hilt-color" onClick={(i) => this.handleHiltChange(i)}/>
          </div>
      </header>
        
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
