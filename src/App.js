import React from "react";
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";

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
