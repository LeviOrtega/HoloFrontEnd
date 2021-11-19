import React from "react"
import MicroPreview from "../components/MicroPreview";
import { query, orderBy, limit, collection, getDocs} from "firebase/firestore";  
import {firestore} from '../Firebase';
import { Link } from "react-router-dom";



class Main extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
          microPreviewList: []
        }

    }



    async componentDidMount(){
        
        const creations = collection(firestore, 'creations');
        const q =  query(creations, orderBy("dateCreated", "desc"), limit(10));
        const querySnap = await getDocs(q);

        querySnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            this.setState({
                microPreviewList: [...this.state.microPreviewList, 
                <li key={doc.id} style={{listStyleType:"none", border: "white", borderStyle:"solid"}}>
                    <Link className="link-to-preview" to={"/preview/" + doc.id} style={{textDecoration:"none"}}>  
                        <MicroPreview
                        bladeColor = {doc.data().bladeColor}
                        hiltColor = {doc.data().hiltColor}
                        robeColor = {doc.data().robeColor}
                        eyeColor = {doc.data().eyeColor}
                        skinColor = {doc.data().skinColor}
                        isSith = {doc.data().isSith}
                        backgroundColor = {doc.data().backgroundColor}
                        uuid = {doc.id}
                        />
                    </Link>
                </li>]
            })
          });

        
       // console.log(this.state.microPreviewList);
        
    }



    
            
    render() {
        return (
        <div style={{}}>
        <div className="list-container" style ={{width: "90%"}}>

            {/* <button onClick={() => this.setState({
            microPreviewList: [...this.state.microPreviewList, <li key=""><MicroPreview></MicroPreview></li>]
        })} /> */}
            {/* <h1 style={{textAlign:"center", color:"white"}}>Main Page</h1> */}

            <ul style={{
                
                display:"grid",
                gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",
                gap:"10px"
            }}
            
            
            >{this.state.microPreviewList}</ul>
        </div>
        </div>
    );
    }
    
    
}

export default Main