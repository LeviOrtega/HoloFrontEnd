import React from 'react';
import {HiltColors} from '../resources/Colors';
import ColorButton from './ColorButton';
import './AssetManager.css'


class HiltManager extends React.Component{



    renderHiltColorOptionButton(i){
        return (
            <ColorButton 
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