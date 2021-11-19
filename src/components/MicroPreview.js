
import React from "react";
import Character from "../resources/Character";




class MicroPreview extends React.Component{
    constructor(props){
        super(props);
        this.state={
          bladeColor: this.props.bladeColor,
          hiltColor: this.props.hiltColor,
          robeColor: this.props.robeColor,
          eyeColor: this.props.eyeColor,
          skinColor: this.props.skinColor,
          isSith: this.props.isSith,
          backgroundColor: this.props.backgroundColor,
          uuid: this.props.uuid, 
        }

    }




    render(){
        return(
            <div style={{backgroundColor: this.state.backgroundColor, borderRadius: "10%", border: "white", borderStyle:"solid"}}>
                <Character 
                  bladeColor = {this.state.bladeColor}
                  hiltColor = {this.state.hiltColor}
                  robeColor = {this.state.robeColor}
                  eyeColor = {this.state.eyeColor}
                  skinColor = {this.state.skinColor}
              />
            </div>
        );
    }
}


export default MicroPreview