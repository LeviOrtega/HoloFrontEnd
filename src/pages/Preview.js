import React, { useEffect } from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import {firestore} from '../Firebase';
import Character from '../resources/Character'



async function getCharacterInfo(previewID){


    getDoc(doc(firestore, 'creations', previewID)).then(characterSnap => {

        if (characterSnap.exists()){
            console.log("Document data:", characterSnap.data());
             return characterSnap;
            
        }
    })
     
}


function getChatacter(bladeColor){
    return (
        <Character>
            bladeColor={bladeColor}
        </Character>
    )
}


function Preview(){
    const { previewID } = useParams();

   

    useEffect(() => {
        let c = getCharacterInfo(previewID)
        getChatacter(c.bladeColor)
    })
        
        return(
            <div>{getChatacter("#FFFFFF")}</div>
        )
    

}

export default Preview