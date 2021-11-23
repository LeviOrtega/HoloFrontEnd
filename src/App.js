import React from "react";
import "./App.css";
//import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import CharacterCreatePage from "./pages/CharacterCreatePage";
import Navbar from "./Navbar";
import Main from "./pages/Main";
import About from "./pages/About";
import Preview from "./pages/Preview";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/character-create" element={<CharacterCreatePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/preview/:previewID" element={<Preview />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
