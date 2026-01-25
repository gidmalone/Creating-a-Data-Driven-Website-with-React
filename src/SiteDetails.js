import React from "react";
import {
   BrowserRouter,
   Route,
   Routes,
   Link,
   useParams
} from "react-router-dom";

function SiteDetails(props){

    const si = useParams()

    const site = props.sites.find(s => parseInt(s.SiteID) === parseInt(si.SiteID));

    return (
        
        <>
        {site ? 
         <>
         
         <Link to="/"> <button className="allSites"> Return to All Sites </button> </Link>
            
        <h1>{site.Site}</h1>
        <h2>Latitude: {site.Latitude} Longitude: {site.Longitude}</h2>
        <div className = "photo_desc">
            <p>
                <img src={`/Project3Files/${site.Image}`} alt={site.Site}/>
            </p>
        
            <p>
                {site.Description}
            </p>
         </div>

         </>
         :
            <p>Site with ID {si.SiteID} not found.</p>
         }
        </>



    )
}

export default SiteDetails;