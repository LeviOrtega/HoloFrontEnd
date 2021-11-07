import React from 'react';
import {BladeColors} from '../resources/Colors';
import './AssetManager.css'
function BladeColorButton(props){
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

class BladeManager extends React.Component{


    

    renderBladeColorOptionButton(i){
        return( 
            <BladeColorButton
            color={BladeColors[i]}
            onClick={() => this.props.onClick(i)} 
            />
        )
        
    }



    render() {
        return (
                <div className="container">
                    <h3 className="title">Blade</h3>
                    <div className="button-container">
                    {this.renderBladeColorOptionButton(0)}
                    {this.renderBladeColorOptionButton(1)}
                    {this.renderBladeColorOptionButton(2)}
                    {this.renderBladeColorOptionButton(3)}
                    {this.renderBladeColorOptionButton(4)}
                    {this.renderBladeColorOptionButton(5)}
                    </div>
                </div>
        )
    }
    
}


export default BladeManager;