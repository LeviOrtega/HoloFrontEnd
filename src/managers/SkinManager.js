import React from 'react';
import {SkinColors} from '../resources/Colors';
import ColorButton from './ColorButton';
import './AssetManager.css'


class SkinManager extends React.Component{

    renderSkinColorOptionButton(i){
        return (
            <ColorButton 
            color={SkinColors[i]}
            onClick={() => this.props.onClick(i)}
            />
        )
    }


    render() {
        return (
            
        <div className="container">
                <h3 className="title">Skin:</h3>
                <div className="button-container">
                {this.renderSkinColorOptionButton(0)}
                {this.renderSkinColorOptionButton(1)}
                {this.renderSkinColorOptionButton(2)}
                {this.renderSkinColorOptionButton(3)}
                {this.renderSkinColorOptionButton(4)}
                {this.renderSkinColorOptionButton(5)}
                
            </div>
        </div>
        )
    }
    
}


export default SkinManager;