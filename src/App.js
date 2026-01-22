import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect, useState } from 'react';
import SiteList from "./SiteList.js";
import SiteDetails from "./SiteDetails.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {

  const [sites, setSites] = useState([])

  useEffect(() => {
    async function fetchData(){
    const response = await fetch("/Project3Files/BoyleSites.json")
      const result = await response.json()
      setSites(result)
  }
  fetchData()
}, [])


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<SiteList sites = {sites}/>} />
        <Route path="/site/:SiteID" element = {<SiteDetails sites = {sites}/>} />
      </Routes>
     </BrowserRouter>


  
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
    </>
  );
}

export default App;
