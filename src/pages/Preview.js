import React from "react";
import { useParams } from "react-router";
import PreviewCharacter from "../components/PreviewCharacter";
import {useNavigate} from 'react-router-dom'

function Preview() {
  let { previewID } = useParams();
  var navigate = useNavigate()

  function play(){
    navigate("/play/" + previewID)
  }

  return (
    <div
      className="preview-wrapper"
      style={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
      <PreviewCharacter previewID={previewID} onClick={() => play()} />
      
    </div>
  );
}

export default Preview;
