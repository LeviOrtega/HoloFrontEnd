import React from 'react';
import {RobeColors} from '../resources/Colors';
import './AssetManager.css'

function RobeColorButton(props){
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

class RobeManager extends React.Component{



    renderRobeColorOptionButton(i){
        return (
            <RobeColorButton 
            color={RobeColors[i]}
            onClick={() => this.props.onClick(i)}
            />
        )
    }


    render() {
        return (
            
        <div className="container">
                <h3 className="title">Robe</h3>
                <div className="button-container">
                {this.renderRobeColorOptionButton(0)}
                {this.renderRobeColorOptionButton(1)}
                {this.renderRobeColorOptionButton(2)}
                {this.renderRobeColorOptionButton(3)}
                {this.renderRobeColorOptionButton(4)}
                {this.renderRobeColorOptionButton(5)}
            </div>
        </div>
        )
    }
    
}


export default RobeManager;