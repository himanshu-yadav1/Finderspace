import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <div className="container my-3">

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} /> 
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
