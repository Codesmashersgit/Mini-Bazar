
import React from 'react'
import Navbar from "./components/Navbar"
import "./App.css"
import { useState } from 'react';
import HomePage from "./pages/HomePage"

function App() { 
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
  };
  
  return (
    <div
      className={`${
        dark ? "bg-black text-white" : "bg-white text-black"
      } transition-all duration-1000 ease-in-out`}
    >
      <Navbar showcontent={true} dark={dark} toggle={toggle} showprofile={true}/>
      <HomePage/>
    </div>
  )
}

export default App