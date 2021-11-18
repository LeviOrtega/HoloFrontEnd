import React from 'react'
import './CharacterCreate.css'
import AssetManager from './AssetManager'
import {BladeColors, HiltColors, RobeColors, EyeColors, SkinColors, BackgroundColors} from '../resources/Colors'
import Character from '../resources/Character'

import { firestore} from '../Firebase';
import { doc, setDoc } from "firebase/firestore";






class CharacterCreate extends React.Component {
    
      constructor(props){
      super(props)
      this.state={
          bladeColor: this.props.bladeColor,
          hiltColor: this.props.hiltColor,
          robeColor: this.props.robeColor,
          eyeColor: this.props.eyeColor,
          skinColor: this.props.skinColor,
          isSith: this.props.isSith,
          backgroundColor: BackgroundColors[(this.props.isSith ? 1 : 0)],
          uuid: this.props.uuid, 
      }
    }

    async publish(){
     
      let creation = await doc(firestore, 'creations/' + this.state.uuid)
      const docData = {
        bladeColor: this.state.bladeColor,
        hiltColor: this.state.hiltColor,
        skinColor: this.state.skinColor,
        robeColor: this.state.robeColor,
        eyeColor: this.state.eyeColor,
        backgroundColor: this.state.backgroundColor,
        isSith: this.state.isSith,
        ownerID: "owner1"
      };
      await setDoc(creation, docData);

     // let usr = await doc(firestore, 'users/' + this.state.ownerID)
      
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

      handleFactionChange(){
        this.setState({
          isSith: !(this.state.isSith),
          backgroundColor: BackgroundColors[!this.state.isSith ? 1 : 0]
        })
      }
      
      
      render() {
        return (
          

      <div className="Main-Container">
        <button onClick={() => this.publish()}> Publish </button>
        <div className="CharacterCreate" >
          
            

          <div className="Character-Background" style={{ background: "linear-gradient(90deg," + (this.state.backgroundColor) + " 0%, " + (this.state.backgroundColor) + " 100%)"}}>
              <Character 
                  bladeColor = {this.state.bladeColor}
                  hiltColor = {this.state.hiltColor}
                  robeColor = {this.state.robeColor}
                  eyeColor = {this.state.eyeColor}
                  skinColor = {this.state.skinColor}
              />
          </div> 
        
        <div className="Asset-container">

          <div className="Asset-manager-container">

            <AssetManager className ="Blade-Assets" title={"Blade:"} buttonCount={6} colorArray={BladeColors} onClick={(i) => this.handleBladeChange(i)}/>

            <AssetManager className ="Hilt-Assets" title={"Hilt:"} buttonCount={3} colorArray={HiltColors} onClick={(i) => this.handleHiltChange(i)}/>
            
            <AssetManager className ="Robe-Assets" title={"Robe:"} buttonCount={6} colorArray={RobeColors} onClick={(i) => this.handleRobeChange(i)}/>

            <AssetManager className ="Eye-Assets" title={"Eyes:"} buttonCount={6} colorArray={EyeColors} onClick={(i) => this.handleEyeChange(i)}/>

            <AssetManager className ="Skin-Assets" title={"Skin:"} buttonCount={6} colorArray={SkinColors} onClick={(i) => this.handleSkinChange(i)}/>
            
          </div>
          <button className="is-sith-button" style={{backgroundColor: this.state.backgroundColor}} onClick={() => this.handleFactionChange()}><div>{this.state.isSith ? "Sith" : "Jedi"}</div> </button>

        </div>
    </div>
      
    </div>
    
        );
        }




}

export default CharacterCreate