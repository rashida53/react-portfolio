import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {


  return (
    <div className="App">
      <Project />
      <Footer />
    </div>
  );
}

export default App;
