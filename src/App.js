
import React from 'react';
import './App.css';
//import { Outlet } from 'react-router-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css';
import CharacterCreatePage from './pages/CharacterCreatePage';
import Home from './pages/Home';

class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>

          <Route path="/Create_character" element={<CharacterCreatePage />} />

          </Route>


          


      </Routes>
   
   </BrowserRouter>
      
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
