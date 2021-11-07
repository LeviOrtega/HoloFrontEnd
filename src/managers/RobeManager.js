import React from 'react';
import {RobeColors} from '../resources/Colors';
import ColorButton from './ColorButton';
import './AssetManager.css'



class RobeManager extends React.Component{



    renderRobeColorOptionButton(i){
        return (
            <ColorButton 
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