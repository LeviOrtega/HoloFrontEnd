import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Firebase";
import Character from "../resources/Character";
import Typewriter from "typewriter-effect";
import Sith, { Jedi } from "../resources/Holocron";
import "./PlayCharacter.css"

class PlayCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "#111111",
      previewID: this.props.previewID,
      character: null,
      resumeField: [],
      resumeTitle: [],
      resumeTitleText: "",
      loading: true,
      onClick: this.props.onClick,
      isSith: false,
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
                className="play-wrapper"
                style={{ display: "flex", flexDirection: "column", rowGap: 0 }}
              >
                <div className="play-character-container">
                  <div
                    className="character-hover-wrapper "
                    style={{
                      transform:
                        "scaleX(" +
                        (characterSnap.data().isRightHanded ? 1 : -1) +
                        ")",
                    }}
                  >
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
          });
          this.setState({
            backgroundColor: characterSnap.data().backgroundColor,
            isSith: characterSnap.data().isSith,
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
      <>
      <div className="main-play-background"style={{
        backgroundColor: this.state.backgroundColor,
        width: "75%",
        border: "white",
        borderStyle:"solid",
        borderRadius:"10%",
        marginTop:"1%",
        opacity: this.state.loading ? 0 : 1,
      }}>
        <div className="main-play-wrapper"
          
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              
              marginRight: "2%",
              alignSelf:"center"
            }}
          >
            <div style={{}}>{this.state.character}</div>

            {!this.state.loading && (
              <div className="holocron-asset">{this.state.isSith ? <Sith /> : <Jedi />}</div>
            )}
          </div>

          {!this.state.loading && (
            <div className="resume-info-wrapper" style={{ textAlign: "left", margin: "10px" }}>
              <div className="resume-title-text" style={{  marginBottom: "10px" }}>
                {this.state.resumeTitleText}
              </div>
              <div className="resume-typer-wrapper">
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
                        resumeTitleText: "",
                      });

                      this.state.onClick();
                    });
                }}
              />
              </div>
            </div>
          )}
        </div>
        </div>
        {!this.state.loading && (
          <button
            className="publish"
            style={{ marginBottom: "%" }}
            onClick={() => this.state.onClick()}
          >
            Preview Full Resume
          </button>
        )}
     </>
    );
  }
}

export default PlayCharacter;
