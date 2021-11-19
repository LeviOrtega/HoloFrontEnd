import React from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import {firestore} from '../Firebase';
import Character from '../resources/Character';
import { useEffect } from "react/cjs/react.development";
import { useState } from "react";



function Preview(){

    const [bladeColor, setBladeColor] = useState("#000000");
    const [hiltColor, setHiltColor] = useState("#000000");
    const [eyeColor, setEyeColor] = useState("#000000");
    const [robeColor, setRobeColor] = useState("#000000");
    const [skinColor, setSkinColor] = useState("#000000");

    let {previewID} = useParams();
    

    useEffect(() => {
        getDoc(doc(firestore, 'creations', previewID)).then(characterSnap => {
            
                console.log("Document data:", characterSnap.data());
                 setBladeColor(characterSnap.data().bladeColor);
                 setHiltColor(characterSnap.data().hiltColor);
                 setEyeColor(characterSnap.data().eyeColor);
                 setRobeColor(characterSnap.data().robeColor);
                 setSkinColor(characterSnap.data().skinColor);
            
            });
     }, [previewID]);

        return(
           <div className="wrapper" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{width: "50%"}}>
                <Character 
                    
                    bladeColor = { bladeColor}
                    hiltColor = { hiltColor}
                    robeColor = { robeColor}
                    eyeColor = { eyeColor}
                    skinColor = { skinColor}
                />
                 
            </div>
            </div> 
        )
    
        
}

export default Preview;