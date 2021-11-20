
import React from 'react';
import {BladeColors, HiltColors, RobeColors, EyeColors, SkinColors} from '../resources/Colors';
import CharacterCreate from '../components/CharacterCreate';
import uuid from 'react-uuid'


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



class CharacterCreatePage extends React.Component {
  

  render() {
    return (
      <div className="character-create-page"  >
        
        <CharacterCreate 
        bladeColor={BladeColors[getRandomInt(6)]}
        hiltColor={HiltColors[getRandomInt(3)]}
        robeColor={RobeColors[getRandomInt(6)]}
        eyeColor={EyeColors[getRandomInt(6)]}
        skinColor={SkinColors[getRandomInt(6)]}
        isSith={(getRandomInt(2) === 1) ? true : false}
        uuid={uuid()}
        charTitle={"Character Title"}
        />

      </div>
      
    );
    }
  }


export default CharacterCreatePage