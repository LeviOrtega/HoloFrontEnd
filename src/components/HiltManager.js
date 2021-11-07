import React from 'react';
import {HiltColors} from '../resources/Colors';
import './AssetManager.css'

function HiltColorButton(props){
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

class HiltManager extends React.Component{



    renderHiltColorOptionButton(i){
        return (
            <HiltColorButton 
            color={HiltColors[i]}
            onClick={() => this.props.onClick(i)}
            />
        )
    }


    render() {
        return (
            
        <div className="container">
                <h3 className="title">Hilt</h3>
                <div className="button-container">
                {this.renderHiltColorOptionButton(0)}
                {this.renderHiltColorOptionButton(1)}
                {this.renderHiltColorOptionButton(2)}
            </div>
        </div>
        )
    }
    
}


export default HiltManager;