import React from "react";
import { useParams } from "react-router";
import PlayCharacter from "../components/PlayCharacter";
import { useNavigate } from "react-router-dom";

function Play() {
  let { previewID } = useParams();
  var navigate = useNavigate();

  function preview() {
    navigate("/preview/" + previewID);
  }

  return (
    <div
      className="play-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PlayCharacter previewID={previewID} onClick={() => preview()} />
    </div>
  );
}

export default Play;
