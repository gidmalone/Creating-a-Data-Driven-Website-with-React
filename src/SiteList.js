import React from "react";
import {
   BrowserRouter,
   Route,
   Routes,
   Link
} from "react-router-dom";

function SiteList(props){
    return (
        <>
         
         <h1>Sites</h1>
         <div className="sites_list">
            <ul>
               {props.sites.map((site) => (
                     <li><Link to={`/site/${site.SiteID}`}>{site.Site}</Link></li>
               )
               )}    
               </ul>
         </div>
      </>
    )
}

export default SiteList;