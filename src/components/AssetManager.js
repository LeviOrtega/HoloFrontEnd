import React from 'react';
import './AssetManager.css'

function ColorButton(props){
    let c = props.color
    return (
        
        <button className="button"
        onClick={() => props.onClick()}
        style={{ 
            background: c,
        }}
        
        ></button>
    )
}

function renderColorButton(i, props){
    return( 
        <ColorButton
        color={props.colorArray[i]}
        onClick={() => props.onClick(i)} 
        />
    )
    
}

class AssetManager extends React.Component{

    getButtons(){
        const buttons = [];
        for (let i = 0; i < this.props.buttonCount; i++){
            buttons.push(renderColorButton(i, this.props))
        }
        return buttons;
    }

    render() {
        return (
                <div className="container">
                    
                    <h3 className="title">{this.props.title}</h3>
                    <div className="button-container">
                    {this.getButtons(this.props.buttonCount)}
                    </div>
                </div>
        )
    }

}

export default AssetManager

