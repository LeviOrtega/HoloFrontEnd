//import logo from './logo.svg';
import React from 'react';
import './App.css';
import './resources/Lightsaber.js'
import {BladeColors, HiltColors, RobeColors, EyeColors, SkinColors} from './resources/Colors';
import EyeManager from './components/EyeManager';
import BladeManager from './components/BladeManager';
import RobeManager from './components/RobeManager';
import SkinManager from './components/SkinManager';
import HiltManager from './components/HiltManager';
import Background from './resources/Background';
import Character from './resources/Character';

class App extends React.Component {
  constructor(props){
  super(props)
  this.state={
      bladeColor: BladeColors[0],
      hiltColor: HiltColors[0],
      robeColor: RobeColors[0],
      eyeColor: EyeColors[0],
      skinColor: SkinColors[0],
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

  handleSkinChange(i){
    this.setState({
      skinColor: SkinColors[i]
    })
  }

  handleRobeChange(i){

    this.setState({
      robeColor: RobeColors[i]
    })

  }

  handleEyeChange(i){
    this.setState({
      eyeColor: EyeColors[i]
    })
  }

  renderResultBackground(color){
    return (
      <Background 
        bgColor = {color}
      />
    )
  }
  
  
  render() {
    return (
      <div className="App" >
        <div className="Main-Container">
          <div className="Results-Container">
            <div className="inner">{this.renderResultBackground("#262b44")}</div>
              <div className="Character-Container">
             
                <Character
                    bladeColor = {this.state.bladeColor}
                    hiltColor = {this.state.hiltColor}
                    robeColor = {this.state.robeColor}
                    eyeColor = {this.state.eyeColor}
                    skinColor = {this.state.skinColor}
                />
    
            </div>
          </div>
              
          <div className="Asset-manager-container">
            <BladeManager className="Blade-color" onClick={(i) => this.handleBladeChange(i)}/>
            <HiltManager className="Hilt-color" onClick={(i) => this.handleHiltChange(i)}/>
            <RobeManager className="Robe-color" onClick={(i) => this.handleRobeChange(i)}/>
            <EyeManager className="Eye-color" onClick={(i) => this.handleEyeChange(i)}/>
            <SkinManager className="Skin-color" onClick={(i) => this.handleSkinChange(i)}/>
          </div>
      </div>
        
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
