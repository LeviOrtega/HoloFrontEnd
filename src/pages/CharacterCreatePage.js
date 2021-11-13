
import React from 'react';
import {BladeColors, HiltColors, RobeColors, EyeColors, SkinColors} from '../resources/Colors';
import CharacterCreate from '../components/CharacterCreate';

class CharacterCreatePage extends React.Component {
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  render() {
    return (
      <div className="CharacterCreatePage" >
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


export default CharacterCreatePage