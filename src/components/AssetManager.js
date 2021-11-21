import React from "react";
import "./AssetManager.css";

function ColorButton(props) {
  return (
    <button
      className="button"
      onClick={() => props.onClick()}
      style={{
        background: props.color,
      }}
    ></button>
  );
}

function renderColorButton(i, props) {
  return (
    <ColorButton color={props.colorArray[i]} onClick={() => props.onClick(i)} />
  );
}

class AssetManager extends React.Component {
  getButtons() {
    const buttons = [];
    for (let i = 0; i < this.props.buttonCount; i++) {
      buttons.push(
        <li key={this.props.className + i}>
          {renderColorButton(i, this.props)}
        </li>
      );
    }

    return buttons;
  }

  render() {
    return (
      <div className="container">
        <h4 className="title">{this.props.title}</h4>
        <div className="button-container">
          <ul id="list">{this.getButtons(this.props.buttonCount)}</ul>
        </div>
      </div>
    );
  }
}

export default AssetManager;
