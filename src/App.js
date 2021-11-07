//import logo from './logo.svg';
import React from 'react';
import './App.css';
import './resources/Lightsaber.js'
import Lightsaber from './resources/Lightsaber.js';
import {BladeColors, HiltColors} from './resources/Colors';

class App extends React.Component {
  constructor(props){
  super(props)
  this.state={
      
      
      bladeColor: BladeColors[5],
      hiltColor: HiltColors[0],
      index: 0,
  }
}

  
  
  render() {
    console.log(this.state)
    return (
      <div className="App" >
        <header className="App-header">
        <div className="Saber-Container">
          <Lightsaber 
              
              bladeColor = {this.state.bladeColor}
              hiltColor = {this.state.hiltColor}
          />
        </div>
          <button className="SaberSelect" onClick={() => {
            
            this.setState({
              index: (this.state.index + 1) % 6,
              
              bladeColor: BladeColors[this.state.index]
              
            })
            
          }
            }>Change Color</button>

          <button className="HiltToggle" onClick={() => {
            this.setState({
              
                hiltColor: (this.state.hiltColor === HiltColors[0] ? HiltColors[1] : HiltColors[0])
              
            })
          }}>Change Hilt </button>
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
