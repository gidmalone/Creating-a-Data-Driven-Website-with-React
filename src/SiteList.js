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
   console.log("hi", visits)

   useEffect(() => {
      localStorage.setItem('visits', JSON.stringify(visits))
      console.log(visits)
   }, [visits])

   // useEffect(() => {
	// 	const visits = JSON.parse(localStorage.getItem('visits'));
	// 	if (visits) {
	// 		setVisits(visits);
	// 	}
   //    else 
   //       setVisits({})
	// }, []);

    return (
        <>
         
         <h1>Historical Sites in Boyle County</h1>
         <button onClick={() => {
            const copy = {... visits};
            copy["hi"] = true;
            setVisits(copy)
         }}>
            click me</button>

         
         <h1>{visits["hi"]}</h1>
         

         <div className="sites_list">
               {props.sites.map((site) => (
                  <div className="imgWrapper">
                     <Link to={`/site/${site.SiteID}`}>
                        <button>{site.Site}</button>
                     </Link>
                     <img src={`/Project3Files/${site.Image}`} alt = {site.Site}/>
                  </div>
               )
               )}    
         </div>
         {/* <div className = "visited">
               {props.sites.map((site) => (
                  {visits[site.Site]} ?
                     (<p>{`${site.Site} has been visited.`}</p>)
                  :
                     (<p>{`${site.Site} has not been visited.`}</p>)
                  )
                  )}
         </div>  */}
      </>
    )
}

export default SiteList;