import React from "react";
import { doc, getDoc } from "firebase/firestore";
import {firestore} from '../Firebase';
import Character from '../resources/Character';



class PreviewCharacter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            previewID: this.props.previewID,
            character: null,
        }
    }


        componentDidMount(){
            getDoc(doc(firestore, 'creations', this.state.previewID)).then(characterSnap => {
                if (characterSnap.exists()){
                    //console.log("Document data:", characterSnap.data());

                    this.setState({
                     character: 
                     <div className="preview-character-container" style={{width: "20%", backgroundColor: characterSnap.data().backgroundColor, border: "white", borderStyle: "solid", borderRadius: "10%", marginTop: "1%"}}>
                
                        <Character 
                        bladeColor = {characterSnap.data().bladeColor}
                        hiltColor = {characterSnap.data().hiltColor}
                        eyeColor = {characterSnap.data().eyeColor}
                        robeColor = {characterSnap.data().robeColor}
                        skinColor = {characterSnap.data().skinColor}
                        />
                     </div>,
                    
                    });
                }
                });
        }


        render(){
            return(
                    this.state.character 
            )
        }

}

export default PreviewCharacter