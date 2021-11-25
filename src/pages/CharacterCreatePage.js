import React from "react";
import {
  BladeColors,
  HiltColors,
  RobeColors,
  EyeColors,
  SkinColors,
} from "../resources/Colors";
import CharacterCreate from "../components/CharacterCreate";
import uuid from "react-uuid";
import {useAuth} from "../contexts/AuthContext"
import {useNavigate} from 'react-router-dom'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function CharacterCreatePage() {
  const {currentUser} = useAuth()
  const navigate = useNavigate()

  async function navigatePreview(id){
    navigate("/preview/" + id)
  }
  
    return (
      <div className="character-create-page">
        <CharacterCreate
          bladeColor={BladeColors[getRandomInt(6)]}
          hiltColor={HiltColors[getRandomInt(3)]}
          robeColor={RobeColors[getRandomInt(6)]}
          eyeColor={EyeColors[getRandomInt(6)]}
          skinColor={SkinColors[getRandomInt(6)]}
          isSith={getRandomInt(2) === 1 ? true : false}
          uuid={uuid()}
          // just in case currentUser is null then we want to set this to nothing
          ownerID={currentUser ? currentUser.uid : ""}
          charTitle={"Character Title"}
          formValues={[{ desc: "", detail: "" }]}
          realName={""}
          contactInfo={""}
          website={""}
          navigatePreview={(id) => navigatePreview(id)}
        />
      </div>
    );
  
}

export default CharacterCreatePage;
