import React from 'react'
import './CharacterCreate.css'
import AssetManager from './AssetManager'
import {BladeColors, HiltColors, RobeColors, EyeColors, SkinColors} from '../resources/Colors'
import Character from '../resources/Character'



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
                <AssetManager className ="Blade-Assets" title={"Blade:"} buttonCount={6} colorArray={BladeColors} onClick={(i) => this.handleBladeChange(i)}/>

                <AssetManager className ="Hilt-Assets" title={"Hilt:"} buttonCount={3} colorArray={HiltColors} onClick={(i) => this.handleHiltChange(i)}/>
                
                <AssetManager className ="Robe-Assets" title={"Robe:"} buttonCount={6} colorArray={RobeColors} onClick={(i) => this.handleRobeChange(i)}/>

                <AssetManager className ="Eye-Assets" title={"Eyes:"} buttonCount={6} colorArray={EyeColors} onClick={(i) => this.handleEyeChange(i)}/>

                <AssetManager className ="Skin-Assets" title={"Skin:"} buttonCount={6} colorArray={SkinColors} onClick={(i) => this.handleSkinChange(i)}/>
               
              </div>
          </div>
            
          </div>
          
        );
        }




}

export default CharacterCreate