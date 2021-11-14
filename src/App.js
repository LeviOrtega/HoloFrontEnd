
import React from 'react';
import './App.css';
//import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css';
import CharacterCreatePage from './pages/CharacterCreatePage';
import Navbar from './Navbar';
import Main from './pages/Main';
import About from './pages/About';


class App extends React.Component {


  render() {
    return (
     
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/character-create" element={<CharacterCreatePage />} />
          <Route path="/about" element={<About />} />

          

        </Routes>


      </Router>
   
      
    );
    }
  }

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
