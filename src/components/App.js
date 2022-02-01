import React from "react";
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import Projects from "./Projects";
import Skills from "./Skills";
import Main from "./Main";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <>  
      <GlobalStyle />
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
