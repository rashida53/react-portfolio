import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import '../src/styles/About.css'
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
