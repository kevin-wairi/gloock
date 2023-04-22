import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import "./comp.css"

function Section(){   

 const slides = [
     {url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1680026109"},
     {url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header_alt_assets_3.jpg?t=1681315823"},
     {url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009"},
     {url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1527950/header_alt_assets_2.jpg?t=1681306889"},
     {url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1679171844"},
     {url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1527950/header_alt_assets_2.jpg?t=1681306889"},
     {url: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg?t=1681115546"},
     {url: "https://cdn.cloudflare.steamstatic.com/steam/apps/236390/header.jpg?t=1681461045"}
     
 ];
return (
  <div>
    <div className="slideContainer">
      <ImageSlider slides={slides} />
    </div>
  </div>
);
}

export default Section


  //upcoming features 
    // useEffect(()=>{
    //   fetch(
    //     "https://api.rawg.io/api/platforms?key=4f89c3c5b01445d399a04f06a9d4515a"
    //   )
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //       const result = data.results;
    //       // result.forEach((val) => console.log(val.image_background));
    //       console.log(result);
    //     });
    // },[])