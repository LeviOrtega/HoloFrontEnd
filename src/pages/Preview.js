import React from "react";
import { useParams } from "react-router";
import PreviewCharacter from "../components/PreviewCharacter";





function Preview(){

    

    let {previewID} = useParams();
    

   

        return(
           <div className="preview-wrapper" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            
                <PreviewCharacter previewID={previewID} />
           
          </div> 
        )
    
        
}



export default Preview;