import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Firebase";
import Character from "../resources/Character";
import Typewriter from "typewriter-effect";

class PlayCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewID: this.props.previewID,
      character: null,
      contactInfo: null,
      resumeField: [],
      resumeTitle: [],
      resumeTitleText: "",
      resumeFieldText: "",
      resumeIndex: 0,
      loading: true,
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
                style={{ display: "flex", flexDirection: "column" }}
              >
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
              </div>
            ),

            contactInfo: (
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
            ),
          });
        }

        characterSnap.data().formValues.map((element) =>
          this.setState({
            resumeField: [...this.state.resumeField, element.detail],
            resumeTitle: [...this.state.resumeTitle, element.desc],
          })
        );

        this.setState({
          loading: false,
        });
      }
    );
  }

  updateResumeInfo(i) {
    this.setState({
      resumeTitleText: this.state.resumeTitle[i],
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          width: "100%",
        }}
      >
        <div style={{ width: "20%" }}>{this.state.character}</div>

        {!this.state.loading && (
          <div style={{ textAlign: "center", width: "50%" }}>
            <div>{this.state.resumeTitleText}</div>
            <Typewriter
             
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .callFunction(() => {
                    this.updateResumeInfo(0);
                  })
                  .typeString(this.state.resumeField[0])

                  .pauseFor(5000)
                  .deleteAll(1)
                  .callFunction(() => {
                    this.updateResumeInfo(1);
                  })
                  .typeString(this.state.resumeField[1])

                  .pauseFor(this.state.resumeField[1] ? 5000 : 0)
                  .deleteAll(1)
                  .callFunction(() => {
                    this.updateResumeInfo(2);
                  })
                  .typeString(this.state.resumeField[2])
                  .pauseFor(this.state.resumeField[2] ? 5000 : 0)
                  .deleteAll(1)
                  .callFunction(() => {
                    this.setState({
                        resumeTitleText:""
                      });
                  })
              }}
            />
          </div>
        )}

        <div style={{}}>{this.state.contactInfo}</div>
      </div>
    );
  }
}

export default PlayCharacter;
