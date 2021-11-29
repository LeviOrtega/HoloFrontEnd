import React, {useState, useEffect} from 'react'
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Firebase";
import CharacterCreate from "../components/CharacterCreate";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function EditCharacter() {
    let { charID } = useParams();
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null)

    async function navigatePreview(id) {
        navigate("/preview/" + id);
      }

    useEffect(() => {
        getDoc(doc(firestore, "creations", charID)).then(
            (characterSnap) => {
              if (characterSnap.exists()) {
                if (characterSnap.data().ownerID !== currentUser.uid) {
                    // if the owner of the creation and current user are not equal just go home
                    return navigate("/")
                }   
                
                setCharacter(
                    <CharacterCreate
                    bladeColor={characterSnap.data().bladeColor}
                    hiltColor={characterSnap.data().hiltColor}
                    robeColor={characterSnap.data().robeColor}
                    eyeColor={characterSnap.data().eyeColor}
                    skinColor={characterSnap.data().skinColor}
                    isSith={characterSnap.data().isSith}
                    isRightHanded={characterSnap.data().isRightHanded}
                    uuid={charID}
                    // just in case currentUser is null then we want to set this to nothing
                    ownerID={currentUser.uid}
                    charTitle={characterSnap.data().charTitle}
                    formValues={characterSnap.data().formValues}
                    realName={characterSnap.data().realName}
                    contactInfo={characterSnap.data().contactInfo}
                    website={characterSnap.data().website}
                    navigatePreview={(id) => navigatePreview(id)}
                  />
                    )
              }
              else{
                  // navigate to 404 page if the character does not exist
                  return navigate("/*")
              }
            
            
            })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    
       

    return (
        <div>
            {character}
        </div>
    )
}
