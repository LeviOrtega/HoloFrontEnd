import React from 'react';
import {EyeColors} from '../resources/Colors';
import './AssetManager.css'

function EyeColorButton(props){
    let c = props.color
    
    return (
        <button 
        className="button"
        onClick={() => props.onClick()}
        style={{
            background: c,
            
        }}
        
        ></button>

    )
}

class EyeManager extends React.Component{



    renderEyeColorOptionButton(i){
        return (
            <EyeColorButton 
            color={EyeColors[i]}
            onClick={() => this.props.onClick(i)}
            />
        )
    }


    render() {
        return (
            
        <div className="container">
                <h3 className="title">Eyes</h3>
                <div className="button-container">
                {this.renderEyeColorOptionButton(0)}
                {this.renderEyeColorOptionButton(1)}
                {this.renderEyeColorOptionButton(2)}
                {this.renderEyeColorOptionButton(3)}
                {this.renderEyeColorOptionButton(4)}
                {this.renderEyeColorOptionButton(5)}
                
            </div>
        </div>
        )
    }
    
}


export default EyeManager;