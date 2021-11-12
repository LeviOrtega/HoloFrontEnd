import React from "react"
import './Home.css'
import { Link } from 'react-router-dom';
import { Outlet } from "react-router";


class Home extends React.Component{


    render(){

        return (

            <nav className="navbar">
                <div className="navbar-container">
                <Link className="link" to="/"> Holocron Resume </Link>
                <Link className="link" to="/Create_character"> Character Create </Link>

                </div>
                <Outlet></Outlet>
            </nav>
        )
    }
}

export default Home