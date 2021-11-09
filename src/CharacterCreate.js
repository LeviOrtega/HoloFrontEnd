import React from 'react'
import './CharacterCreate.css'
import {BladeColors, HiltColors, RobeColors, EyeColors, SkinColors} from './resources/Colors';
import EyeManager from './managers/EyeManager';
import BladeManager from './managers/BladeManager';
import RobeManager from './managers/RobeManager';
import SkinManager from './managers/SkinManager';
import HiltManager from './managers/HiltManager';
import Character from './resources/Character';



class CharacterCreate extends React.Component {
    
      constructor(props){
      super(props)
      this.state={
          bladeColor: this.props.bladeColor,
          hiltColor: this.props.hiltColor,
          robeColor: this.props.robeColor,
          eyeColor: this.props.eyeColor,
          skinColor: this.props.skinColor
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
      
      
      render() {
        return (
          <div className="CharacterCreate" >

            <div className="Main-Container">


              <div className="Character-Background">
    
                <div className="Character-Container">
                  <Character className="Char"
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
                <button className="alignment-button" onClick={() => console.log("hello")}>Alignment</button>
              </div>
          </div>
            
          </div>
          
        );
        }




}

export default CharacterCreate