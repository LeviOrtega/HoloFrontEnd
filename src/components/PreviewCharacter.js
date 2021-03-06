import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Firebase";
import Character from "../resources/Character";

import "./PreviewCharacter.css";

class PreviewCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publish: this.props.publish,
      delete: this.props.delete,
      edit: this.props.edit,
      ownerID: this.props.ownerID,
      previewID: this.props.previewID,
      character: null,
      resumeField: null,
      copied: false,
      copiedContact: false,
      navNotFound: this.props.navNotFound,
    };

    this.copy = this.copy.bind(this);
  }

  getURL() {
    const el = document.createElement("input");
    el.value = window.location.href;
    return el.value;
  }

  copyText(text){
    this.setState({ copiedContact: true });
    navigator.clipboard.writeText(text);
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

                    border: "white",
                    borderStyle: "solid",
                    borderRadius: "15%",

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
                <div
                  style={{
                    marginTop: "2%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* await deleteDoc(doc(db, "cities", "DC")); */}

                  <button
                    className="publish"
                    onClick={() => this.state.publish()}
                  >
                    Play Resume
                  </button>
                  <div className="edit-delete-wrapper">
                  {this.state.ownerID === characterSnap.data().ownerID && (
                    <button
                      className="publish"
                      onClick={() =>
                        this.state.edit()
                      }
                    >
                     Edit
                    </button>
                  )}
                  {this.state.ownerID === characterSnap.data().ownerID && (
                    <button
                      className="publish"
                      onClick={() =>
                        this.state.delete(characterSnap.data().ownerID)
                      }
                    >
                      Delete
                    </button>
                  )}
                  </div>
                </div>
              </div>
            ),

            resumeField: (
              <div>
               

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
                        className="preview-text-field text-field"
                        placeholder={"Title"}
                        type="text"
                        name="desc"
                        value={element.desc || ""}
                        style={{
                          textAlign: "center",

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
                <h2 style={{ textAlign: "center", color: "white" }}>
                  Contact Info
                </h2>
                <form style={{ textAlign: "center" }}>
                  <div className="contact-info">
                    <input
                      readOnly
                      className="preview-text-field contact-field"
                      type="text"
                      name="real-name"
                      value={characterSnap.data().contactInfo}
                      style={{ textAlign: "center" }}
                      onClick={() => this.copyText(characterSnap.data().contactInfo)}
                    />
                    <input
                      readOnly
                      className="preview-text-field contact-field"
                      type="text"
                      name="contact-info"
                      value={characterSnap.data().realName}
                      style={{ textAlign: "center" }}
                      onClick={() => this.copyText(characterSnap.data().realName)}
                    />
                    <input
                      readOnly
                      className="preview-text-field contact-field"
                      type="text"
                      name="website"
                      value={characterSnap.data().website}
                      style={{ textAlign: "center" }}
                      onClick={() => {this.copyText(characterSnap.data().website)}}
                    />
                  </div>
                </form>

              </div>
            ),
          });
        }

        else{
          return this.state.navNotFound();
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
        {this.state.copiedContact ? <alert className="copy-confirm">Copied to Clipboard</alert> : <></>}

        {this.state.character && <div className="copy-wrapper">
        <h2 style={{ textAlign: "center", color: "white" }}>
                  Share Your Creation
                </h2>
          
          <button
            className="preview-text-field url-field"
            style={{ alignSelf: "center" }}
            onClick={this.copy}
          >
           {this.getURL()}
           
          </button>

          {this.state.copied ? <alert className="copy-confirm">Copied to Clipboard</alert> : <></>}

        </div>}
        
      </div>
    );
  }
}

export default PreviewCharacter;
