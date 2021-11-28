import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Firebase";
import Character from "../resources/Character";
import Typewriter from "typewriter-effect";
import Sith, { Jedi } from "../resources/Holocron";
import "./PlayCharacter.css";

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
      preview: this.props.preview,
      navNotFound: this.props.navNotFound,
      charTitle: "",
      isSith: false,
      copied: false,
    };
    this.copy = this.copy.bind(this);
  }

  getURL() {
    const el = document.createElement("input");
    el.value = window.location.href;
    return el.value;
  }

  copy() {
    this.setState({ copied: true });
    const el = document.createElement("input");
    el.value = window.location.href;

    navigator.clipboard.writeText(el.value);
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
            charTitle: characterSnap.data().charTitle,
          });
          this.setState({
            backgroundColor: characterSnap.data().backgroundColor,
            isSith: characterSnap.data().isSith,
          });
        } else {
          return this.state.navNotFound();
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
        <div
          className="title-wrapper"
          style={{
            alignSelf: "center",
            textAlign: "center",
            marginTop: "1%",
            background:
              "linear-gradient(90deg, " +
              this.state.backgroundColor +
              " 0%, " +
              this.state.backgroundColor +
              " 100%)",

            border: "white",
            borderStyle: "solid",
            borderRadius: "15%",

            padding: "10px",
          }}
        >
          <label style={{ color: "white" }}>{this.state.charTitle}</label>
        </div>
        <div
          className="main-play-background"
          style={{
            backgroundColor: this.state.backgroundColor,
            width: "75%",
            border: "white",
            borderStyle: "solid",
            borderRadius: "10%",
            marginTop: "1%",
            opacity: this.state.loading ? 0 : 1,
          }}
        >
          <div className="main-play-wrapper">
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                marginRight: "2%",
                alignSelf: "center",
              }}
            >
              <div style={{}}>{this.state.character}</div>

              {!this.state.loading && (
                <div className="holocron-asset">
                  {this.state.isSith ? <Sith /> : <Jedi />}
                </div>
              )}
            </div>

            {!this.state.loading && (
              <div className="resume-info-wrapper" style={{ margin: "10px" }}>
                <div
                  className="resume-title-text"
                  style={{ marginBottom: "10px" }}
                >
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

                          this.state.preview();
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
            onClick={() => this.state.preview()}
          >
            Preview Full Resume
          </button>
        )}
        {!this.state.loading && (
          <div className="copy-wrapper">
            <button
              className="publish url-field"
              style={{ alignSelf: "center" }}
              onClick={this.copy}
            >
              {this.getURL()}
            </button>

            {this.state.copied ? (
              <alert className="copy-confirm">Copied to Clipboard</alert>
            ) : (
              <></>
            )}
          </div>
        )}
      </>
    );
  }
}

export default PlayCharacter;
