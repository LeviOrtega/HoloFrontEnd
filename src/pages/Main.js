import React from "react"
import {BladeColors, HiltColors, RobeColors, EyeColors, SkinColors} from '../resources/Colors';
import Character from "../resources/Character";

class Main extends React.Component{
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    
            
              render() {
                 return (
        // this is just a placeholder for main
        <div className="main" style={{justifyContent:"center", width:500,position:"relative"}} >
        <Character
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

export default Main