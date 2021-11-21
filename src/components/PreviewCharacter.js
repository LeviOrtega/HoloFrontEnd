import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Firebase";
import Character from "../resources/Character";

class PreviewCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewID: this.props.previewID,
      character: null,
      resumeField: null,
    };
  }

  // getResumeFields(rFields){
  //   const fields = []

  //   for(let i = 0; i < rFields.length; i++){
  //     fields.push(
  //       <
  //     )
  //   }

  componentDidMount() {
    getDoc(doc(firestore, "creations", this.state.previewID)).then(
      (characterSnap) => {
        if (characterSnap.exists()) {
          //console.log("Document data:", characterSnap.data());

          this.setState({
            character: (
              <div
                className="preview-wrapper"
                style={{ display: "flex", flexDirection: "column" }}
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
                    width: "80%",
                    border: "white",
                    borderStyle: "solid",
                    borderRadius: "15%",
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
                  <div className ="character-hover-wrapper ">
                  <Character
                    bladeColor={characterSnap.data().bladeColor}
                    hiltColor={characterSnap.data().hiltColor}
                    eyeColor={characterSnap.data().eyeColor}
                    robeColor={characterSnap.data().robeColor}
                    skinColor={characterSnap.data().skinColor}
                  />
                  </div>
                </div>
              </div>
            ),

            resumeField: (
              <div>
                <h2 style={{textAlign:"center", color:"white"}}>Resume Info</h2>
                <form>
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
                        className="char-title"
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
                        className="char-title"
                        type="text"
                        name="detail"
                        value={element.detail || ""}
                        style={{ height: "200px", resize: "none" }}
                      />
                    </div>
                  ))}
                </form>
                <h3 style={{textAlign:"center", color:"white"}}>Contact Info</h3>
                <form style={{ textAlign: "center" }}>
                  <input
                    className="char-title"
                    type="text"
                    name="real-name"
                    value={characterSnap.data().realName}
                    style={{ textAlign: "center", width: "50%" }}
                  />
                  <input
                    className="char-title"
                    type="text"
                    name="contact-info"
                    value={characterSnap.data().contactInfo}
                    style={{ textAlign: "center", width: "80%" }}
                  />
                  <input
                    className="char-title"
                    type="text"
                    name="website"
                    value={characterSnap.data().website}
                    style={{ textAlign: "center", width: "100%" }}
                  />
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
