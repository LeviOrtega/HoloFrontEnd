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
                     <div className="preview-wrapper" style={{display:"flex", flexDirection:"column"}}>
                     <div className="preview-character-container" style={{backgroundColor: characterSnap.data().backgroundColor, border: "white", borderStyle: "solid", borderRadius: "10%", marginTop: "1%"}}>
                
                        <Character 
                        bladeColor = {characterSnap.data().bladeColor}
                        hiltColor = {characterSnap.data().hiltColor}
                        eyeColor = {characterSnap.data().eyeColor}
                        robeColor = {characterSnap.data().robeColor}
                        skinColor = {characterSnap.data().skinColor}
                        />
                     </div>
                        <div className="title-wrapper" 
                        style={{alignSelf:"center", 
                        textAlign:"center",  
                        marginTop:"1%",  
                        background: "linear-gradient(90deg, " + characterSnap.data().backgroundColor + " 0%, " + characterSnap.data().backgroundColor +" 100%)", 
                        width:"80%", 
                        border:"white", 
                        borderStyle:"solid", 
                        borderRadius:"15%"}}>
    
                        <label style={{color: "white"}}>
                        {characterSnap.data().charTitle}
                        </label>
                    </div>
                 </div>,
                    
                    });
                }
                });
        }


        render(){
            return(
                    <div style={{width: "20%"}}>
                        {this.state.character}
                    </div>
            )
        }

}

export default PreviewCharacter