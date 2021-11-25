import React from "react";
import "./CharacterCreate.css";
import AssetManager from "./AssetManager";
import {
  BladeColors,
  HiltColors,
  RobeColors,
  EyeColors,
  SkinColors,
  BackgroundColors,
} from "../resources/Colors";
import Character from "../resources/Character";
import { firestore } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";
// import {useNavigate} from 'react-router-dom'


class CharacterCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bladeColor: this.props.bladeColor,
      hiltColor: this.props.hiltColor,
      robeColor: this.props.robeColor,
      eyeColor: this.props.eyeColor,
      skinColor: this.props.skinColor,
      isSith: this.props.isSith,
      backgroundColor: BackgroundColors[this.props.isSith ? 1 : 0],
      ownerID: this.props.ownerID,
      uuid: this.props.uuid,
      charTitle: this.props.charTitle,
      formValues: this.props.formValues,
      realName: this.props.realName,
      contactInfo: this.props.contactInfo,
      website: this.props.website,
    };

    this.handleCharTitleChange = this.handleCharTitleChange.bind(this);
  }

  checkNoFormEmpty() {
    if (
      this.state.realName === "" ||
      this.state.contactInfo === "" ||
      this.state.website === ""
    )
      return false;

    for (let i = 0; i < this.state.formValues.length; i++) {
      if (
        this.state.formValues[i]["desc"] === "" ||
        this.state.formValues[i]["detail"] === ""
      )
        return false;
    }

    return true;
  }

  async publish() {
    if (this.checkNoFormEmpty()) {
      let creation = await doc(firestore, "creations/" + this.state.uuid);
      const docData = {
        bladeColor: this.state.bladeColor,
        hiltColor: this.state.hiltColor,
        skinColor: this.state.skinColor,
        robeColor: this.state.robeColor,
        eyeColor: this.state.eyeColor,
        backgroundColor: this.state.backgroundColor,
        isSith: this.state.isSith,
        ownerID: this.state.ownerID,
        dateCreated: new Date(),
        charTitle: this.state.charTitle,
        formValues: this.state.formValues,
        realName: this.state.realName,
        contactInfo: this.state.contactInfo,
        website: this.state.website,
      };
      await setDoc(creation, docData);
    } else {
      alert("CANNOT SUBMIT WITH EMPTY FIELDS");
    }

  

    // let usr = await doc(firestore, 'users/' + this.state.ownerID)
  }

  handleRealNameChange(e) {
    this.setState({
      realName: e.target.value,
    });
  }
  handleContactChange(e) {
    this.setState({
      contactInfo: e.target.value,
    });
  }
  handleWebsiteChange(e) {
    this.setState({
      website: e.target.value,
    });
  }

  handleFormChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    if (this.state.formValues.length <= 2) {
      this.setState({
        formValues: [...this.state.formValues, { desc: "", detail: "" }],
      });
    } else {
      alert("CANNOT ADD MORE THAN 3 RESUME FIELDS");
    }
  }

  removeFormFields(i) {
    if (this.state.formValues.length > 1) {
      let formValues = this.state.formValues;
      formValues.splice(i, 1);
      this.setState({ formValues });
    } else {
      alert("CANNOT REMOVE ALL RESUME FIELDS");
    }
  }

  handleBladeChange(i) {
    this.setState({
      bladeColor: BladeColors[i],
    });
  }

  handleHiltChange(i) {
    this.setState({
      hiltColor: HiltColors[i],
    });
  }

  handleSkinChange(i) {
    this.setState({
      skinColor: SkinColors[i],
    });
  }

  handleRobeChange(i) {
    this.setState({
      robeColor: RobeColors[i],
    });
  }

  handleEyeChange(i) {
    this.setState({
      eyeColor: EyeColors[i],
    });
  }

  handleFactionChange() {
    this.setState({
      isSith: !this.state.isSith,
      backgroundColor: BackgroundColors[!this.state.isSith ? 1 : 0],
    });
  }

  handleCharTitleChange(e) {
    this.setState({
      charTitle: e.target.value,
    });
  }

  render() {
    return (
      <div className="main-container">
        {/* <h1 style={{ textAlign: "center" }}>Character Creation</h1> */}
        <div className="title-wrapper" style={{ alignSelf: "center" }}>
            <input
              className="char-title"
              type="text"
              
              placeholder={this.state.charTitle}
              onChange={this.handleCharTitleChange}
              style={{ fontSize: "1.5vw", textAlign: "center", marginBottom:"20px"}}
            />
          </div>
        <div className="character-creation-wrapper">
          

          <div className="character-create">
            <div
              className="character-background"
              style={{
                background:
                  "linear-gradient(90deg," +
                  this.state.backgroundColor +
                  " 0%, " +
                  this.state.backgroundColor +
                  " 100%)",
                  position:"relative"
              }}
            >
               <button
              className="is-sith-button"
              // style={{ backgroundColor: this.state.backgroundColor }}
              onClick={() => this.handleFactionChange()}
            >
              <div>{this.state.isSith ? "Sith" : "Jedi"}</div>{" "}
            </button>
              <div className="character-hover-wrapper">
                <Character
                  bladeColor={this.state.bladeColor}
                  hiltColor={this.state.hiltColor}
                  robeColor={this.state.robeColor}
                  eyeColor={this.state.eyeColor}
                  skinColor={this.state.skinColor}
                />
              </div>
            </div>

            <div className="asset-container">
              <div className="asset-manager-container">
                <AssetManager
                  className="Blade-Assets"
                  title={"Blade:"}
                  buttonCount={6}
                  colorArray={BladeColors}
                  onClick={(i) => this.handleBladeChange(i)}
                />

                <AssetManager
                  className="Hilt-Assets"
                  title={"Hilt:"}
                  buttonCount={3}
                  colorArray={HiltColors}
                  onClick={(i) => this.handleHiltChange(i)}
                />

                <AssetManager
                  className="Robe-Assets"
                  title={"Robe:"}
                  buttonCount={6}
                  colorArray={RobeColors}
                  onClick={(i) => this.handleRobeChange(i)}
                />

                <AssetManager
                  className="Eye-Assets"
                  title={"Eyes:"}
                  buttonCount={6}
                  colorArray={EyeColors}
                  onClick={(i) => this.handleEyeChange(i)}
                />

                <AssetManager
                  className="Skin-Assets"
                  title={"Skin:"}
                  buttonCount={6}
                  colorArray={SkinColors}
                  onClick={(i) => this.handleSkinChange(i)}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="resume-details-wrapper"
          style={{ width: "25%", display: "flex", flexDirection: "column" }}
        >
          <h2 style={{ textAlign: "center" }}>Resume Info</h2>

          <form>
            {this.state.formValues.map((element, index) => (
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
                  onChange={(e) => this.handleFormChange(index, e)}
                  style={{
                    textAlign: "center",
                    width: "80%",
                    alignSelf: "center",
                  }}
                />

                <textarea
                  className="char-title"
                  placeholder={"Details"}
                  type="text"
                  name="detail"
                  value={element.detail || ""}
                  onChange={(e) => this.handleFormChange(index, e)}
                  style={{width:"150%", height: "200px", resize: "none", padding: "20px", alignSelf:"center"}}
                />
              </div>
            ))}

            <div className="add-remove-buttons" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent: "center"}}>
              <button
                className="button-a-r"
                type="button"
                onClick={() => this.addFormFields()}
              >
                +
              </button>

              <button
                type="button"
                className="button-a-r"
                onClick={() =>
                  this.removeFormFields(this.state.formValues.length - 1)
                }
              >
                -
              </button>
            </div>
          </form>

          <h3 style={{ textAlign: "center" }}>Contact Info</h3>

          <form
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              className="real-name char-title"
              placeholder={"Full Name"}
              type="text"
              name="real-name"
              value={this.state.realName || ""}
              onChange={(e) => this.handleRealNameChange(e)}
              style={{ textAlign: "center", width: "80%" }}
            />
            <input
              className="contact-info char-title"
              placeholder={"Phone #, Email, etc."}
              type="text"
              name="contact-info"
              value={this.state.contactInfo || ""}
              onChange={(e) => this.handleContactChange(e)}
              style={{ textAlign: "center", width: "90%" }}
            />
            <input
              className="website char-title"
              placeholder={"LinkedIn, Github, etc."}
              type="text"
              name="website"
              value={this.state.website || ""}
              onChange={(e) => this.handleWebsiteChange(e)}
              style={{ textAlign: "center", width: "100%" }}
            />
          </form>

          <button className="publish" onClick={() => this.publish()}>
            Publish Creation
          </button>
        </div>
      </div>
    );
  }
}

export default CharacterCreate;
