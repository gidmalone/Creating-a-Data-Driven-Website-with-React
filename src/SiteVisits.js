import React from "react";
import {
   BrowserRouter,
   Route,
   Routes,
   Link
} from "react-router-dom";
import { useEffect, useState } from 'react';

function SiteVisits(props){
   const storedVisits = JSON.parse(localStorage.getItem('visits'));
   const visits = storedVisits ? storedVisits : {};

   const visitedSites = props.sites.filter(site => visits[site.SiteID]);
   const unvisitedSites = props.sites.filter(site => !visits[site.SiteID]);

   return(
      <>
      <Link to="/"> <button className="allSites"> Return to All Sites </button> </Link>
      <h1>Visited and Unvisited Sites</h1>
      <div className="siteVisits">
         <div className="visited">
            <h2>Visited Sites</h2>
            {visitedSites.map((site) => (
               <p key={site.SiteID}>{site.Site}</p>
            ))}
         </div>
         <div className="unvisited">
            <h2>Unvisited Sites</h2>
            {unvisitedSites.map((site) => (
               <p key={site.SiteID}>{site.Site}</p>
            ))}
         </div>
      </div>
      </>
   )
}
export default SiteVisits;