import React from "react";
import {
   BrowserRouter,
   Route,
   Routes,
   Link
} from "react-router-dom";
import { useEffect, useState } from 'react';

function SiteList(props){
   const storedVisits = JSON.parse(localStorage.getItem('visits'));
    const [visits, setVisits] = 
        useState(storedVisits ? storedVisits : {})

   const handleCheckboxChange = (siteID) => {
      const updatedVisits = { ...visits };
      if (updatedVisits[siteID]) {
         delete updatedVisits[siteID];
      } else {
         updatedVisits[siteID] = 1;
      }
      setVisits(updatedVisits);
   };

   useEffect(() => {
      localStorage.setItem('visits', JSON.stringify(visits))
      console.log(visits)
   }, [visits])

    return (
        <>
         
         

         
         <h1>Historical Sites in Boyle County</h1>

         <Link to="/siteVisits"> <button className="visitsButton"> View Visited and Unvisited Sites </button> </Link>

         <div className="sites_list">
               {props.sites.map((site) => (
                  <div className="imgWrapper">
                     <Link to={`/site/${site.SiteID}`}>
                        <button className="siteChoice">{site.Site}</button>
                     </Link>
                     <div className="checkWrapper">
                        <label>Visited?</label>
                        <input
                           type="checkbox"
                           checked={visits[site.SiteID] ? true : false}
                           onChange={() => handleCheckboxChange(site.SiteID)}
                        />
                     </div>
                     <img src={`/Project3Files/${site.Image}`} alt = {site.Site}/>
                  </div>
               )
               )}    
         </div> 
      </>
    )
}

export default SiteList;