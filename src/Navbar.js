import React from "react"
import './Navbar.css'
import { Link } from 'react-router-dom';



class Navbar extends React.Component{


    render(){

        return (
            
            <nav className="navbar">
                <div className="navbar-container">
                <Link className="link site-title" to="/" style={{textDecoration:"none"}}> Holocron Resume </Link>
                <Link className="link" to="/character-create"  style={{textDecoration:"none"}}> Character Create </Link>
               
                </div>
               
            </nav>
           
        )
    }
}

export default Navbar