import React from "react";
import { useParams } from "react-router";
import PlayCharacter from "../components/PlayCharacter";
import {useNavigate} from 'react-router-dom'


function Play() {
  let { previewID } = useParams();
  var navigate = useNavigate()

  return (
    <div
      className="play-wrapper"
      style={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PlayCharacter  previewID={previewID} />
      <button className="publish" style={{marginBottom:"2%"}} onClick={() => navigate("/preview/" + previewID) }>
            Preview Full Resume
          </button>
    </div>
  );
}

export default Play;
