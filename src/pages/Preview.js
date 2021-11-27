import React, { useState } from "react";
import { useParams } from "react-router";
import PreviewCharacter from "../components/PreviewCharacter";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from "../Firebase";

function Preview() {
  let { previewID } = useParams();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  var navigate = useNavigate();

  function play() {
    navigate("/play/" + previewID);
  }

  async function handleDelete(creationOwnerID) {
    if (!currentUser) {
      return navigate("/login");
    }

    if (currentUser.uid !== creationOwnerID) {
      return setError("You do not own this creation");
    }
    try {
      await deleteDoc(doc(firestore, "creations", previewID));
      setError("");
      navigate("/");
    } catch {
      setError("Could not delete character");
    }
  }

  return (
    <div
      className="preview-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error && (
        <alert className="sign-error" variant="danger">
          {error}
        </alert>
      )}

      <PreviewCharacter
        previewID={previewID}
        publish={() => play()}
        delete={(creationOwnerID) => handleDelete(creationOwnerID)}
        ownerID={currentUser ? currentUser.uid : ""}
      />
    </div>
  );
}

export default Preview;
