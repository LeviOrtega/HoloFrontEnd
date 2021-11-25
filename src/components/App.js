import React from "react";
import "./App.css";
//import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../index.css";
import CharacterCreatePage from "../pages/CharacterCreatePage";
import Navbar from "./Navbar";
import Main from "../pages/Main";
import About from "../pages/About";
import Preview from "../pages/Preview";
import Signup from "./Signup";
import Login from "./Login";
import AuthProvider from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/character-create" element={<PrivateRoute />}> 
              <Route exact path="/character-create" element={<CharacterCreatePage />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/preview/:previewID" element={<Preview />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
