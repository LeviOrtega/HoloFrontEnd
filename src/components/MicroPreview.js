import React from "react";
import Character from "../resources/Character";
import "./MicroPreview.css";

class MicroPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bladeColor: this.props.bladeColor,
      hiltColor: this.props.hiltColor,
      robeColor: this.props.robeColor,
      eyeColor: this.props.eyeColor,
      skinColor: this.props.skinColor,
      isSith: this.props.isSith,
      backgroundColor: this.props.backgroundColor,
      uuid: this.props.uuid,
      charTitle: this.props.charTitle,
    };
  }

  render() {
    return (
      <div
        className="micro-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            backgroundColor: this.state.backgroundColor,
            borderRadius: "10%",
            border: "white",
            borderStyle: "solid",
          }}
        >
          <div className="micro-char-wrapper">
            <Character
              bladeColor={this.state.bladeColor}
              hiltColor={this.state.hiltColor}
              robeColor={this.state.robeColor}
              eyeColor={this.state.eyeColor}
              skinColor={this.state.skinColor}
            />
          </div>
        </div>
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
            
            
            width: "80%",
            height: "fit-content",
         
            border: "white",
            borderStyle: "solid",
            borderRadius: "15%",
          }}
        >
          <label style={{ color: "white", cursor: "pointer" }}>
            {this.state.charTitle}
          </label>
        </div>
      </div>
    );
  }
}

export default MicroPreview;
