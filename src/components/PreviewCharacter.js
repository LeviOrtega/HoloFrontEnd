import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Firebase";
import Character from "../resources/Character";
import "./PreviewCharacter.css";

class PreviewCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: this.props.onClick,
      previewID: this.props.previewID,
      character: null,
      resumeField: null,
    };
  }

  componentDidMount() {
    getDoc(doc(firestore, "creations", this.state.previewID)).then(
      (characterSnap) => {
        if (characterSnap.exists()) {
          //console.log("Document data:", characterSnap.data());

          this.setState({
            character: (
              <div
                className="preview-wrapper"
                style={{ display: "flex", flexDirection: "column"}}
              >
                <div
                  className="title-wrapper"
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                    marginTop: "1%",
                    background:
                      "linear-gradient(90deg, " +
                      characterSnap.data().backgroundColor +
                      " 0%, " +
                      characterSnap.data().backgroundColor +
                      " 100%)",
                    width: "auto",
                    border: "white",
                    borderStyle: "solid",
                    borderRadius: "15%",
                    fontSize: "1.5vw",
                    padding: "10px",
                  }}
                >
                  <label style={{ color: "white" }}>
                    {characterSnap.data().charTitle}
                  </label>
                </div>

                <div
                  className="preview-character-container"
                  style={{
                    backgroundColor: characterSnap.data().backgroundColor,
                    border: "white",
                    borderStyle: "solid",
                    borderRadius: "10%",
                    marginTop: "1%",
                  }}
                >
                  <div className="character-hover-wrapper ">
                    <Character
                      bladeColor={characterSnap.data().bladeColor}
                      hiltColor={characterSnap.data().hiltColor}
                      eyeColor={characterSnap.data().eyeColor}
                      robeColor={characterSnap.data().robeColor}
                      skinColor={characterSnap.data().skinColor}
                    />
                  </div>
                </div>
                <button className="publish" style={{marginTop: "2%"}} onClick={() =>  this.state.onClick()}>
            Play Resume
        </button>
              </div>
            ),

            resumeField: (
              <div>
                <h2 style={{ textAlign: "center", color: "white" }}>
                  Contact Info
                </h2>
                <form style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <input
                      readOnly
                      className="preview-text-field"
                      type="text"
                      name="real-name"
                      value={characterSnap.data().realName}
                      style={{ textAlign: "center", width: "auto" }}
                    />
                    <input
                      readOnly
                      className="preview-text-field"
                      type="text"
                      name="contact-info"
                      value={characterSnap.data().contactInfo}
                      style={{ textAlign: "center", width: "auto" }}
                    />
                    <input
                      readOnly
                      className="preview-text-field"
                      type="text"
                      name="website"
                      value={characterSnap.data().website}
                      style={{ textAlign: "center", width: "auto" }}
                    />
                  </div>
                </form>

                <h2 style={{ textAlign: "center", color: "white" }}>
                  Resume Info
                </h2>
                <form style={{ display: "flex", flexDirection: "column" }}>
                  {characterSnap.data().formValues.map((element, index) => (
                    <div
                      className="form-inline"
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                      }}
                    >
                      <input
                        readOnly
                        className="preview-text-field"
                        placeholder={"Title"}
                        type="text"
                        name="desc"
                        value={element.desc || ""}
                        style={{
                          textAlign: "center",
                          width: "50%",
                          alignSelf: "center",
                        }}
                      />

                      <textarea
                        readOnly
                        className="preview-text-field"
                        type="text"
                        name="detail"
                        value={element.detail || ""}
                        style={{ height: "200px", resize: "none" }}
                      />
                    </div>
                  ))}
                </form>
              </div>
            ),
          });
        }
      }
    );
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <div style={{ width: "50%" }}>{this.state.character}</div>
        <div style={{}}>{this.state.resumeField}</div>
      </div>
    );
  }
}

export default PreviewCharacter;
