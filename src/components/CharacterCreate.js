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
//import { Link } from 'react-router-dom'
import { firestore } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

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
      uuid: this.props.uuid,
      charTitle: this.props.charTitle,
      formValues: [{ desc: "", detail: "" }],
    };

    this.handleCharTitleChange = this.handleCharTitleChange.bind(this);
  }

  async publish() {
    let creation = await doc(firestore, "creations/" + this.state.uuid);
    const docData = {
      bladeColor: this.state.bladeColor,
      hiltColor: this.state.hiltColor,
      skinColor: this.state.skinColor,
      robeColor: this.state.robeColor,
      eyeColor: this.state.eyeColor,
      backgroundColor: this.state.backgroundColor,
      isSith: this.state.isSith,
      ownerID: "owner1",
      dateCreated: new Date(),
      charTitle: this.state.charTitle,
      formValues: this.state.formValues,
    };
    await setDoc(creation, docData);

    // let usr = await doc(firestore, 'users/' + this.state.ownerID)
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
        <div className="character-title-wrapper">
          <div
            className="title-wrapper"
            style={{ display: "flex", flexDirection: "row", gap: "5px" }}
          >
            <button
              className="is-sith-button"
              style={{ backgroundColor: this.state.backgroundColor }}
              onClick={() => this.handleFactionChange()}
            >
              <div>{this.state.isSith ? "Sith" : "Jedi"}</div>{" "}
            </button>
            <input
              className="char-title"
              type="text"
              placeholder={this.state.charTitle}
              onChange={this.handleCharTitleChange}
            />
          </div>

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
              }}
            >
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

        <div className="resume-details-wrapper" style={{ width: "25%" }}>
          <div className="button-section">
            <button
              className="button add"
              type="button"
              onClick={() => this.addFormFields()}
            >
              +
            </button>

            <button
              type="button"
              className="button remove"
              onClick={() =>
                this.removeFormFields(this.state.formValues.length - 1)
              }
            >
              -
            </button>
          </div>
          <form>
            {this.state.formValues.map((element, index) => (
              <div
                className="form-inline"
                key={index}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <input
                  placeholder={"Title"}
                  type="text"
                  name="desc"
                  value={element.desc || ""}
                  onChange={(e) => this.handleFormChange(index, e)}
                  style={{ width: "50%" }}
                />

                <input
                  placeholder={"Details"}
                  type="text"
                  name="detail"
                  value={element.detail || ""}
                  onChange={(e) => this.handleFormChange(index, e)}
                  style={{ height: "300px" }}
                />
              </div>
            ))}
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
