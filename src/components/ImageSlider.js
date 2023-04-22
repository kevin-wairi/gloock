import React, { useState } from "react";
import "./comp.css"

const ImageSlider = ({slides}) => {
    const[currentIndex,setCurrentIndex] = useState(0)



    const previousSlide =()=>{
const isFirstSlide = currentIndex === 0
const newIndex = isFirstSlide ? slides.length -1 : currentIndex-1;
      setCurrentIndex(newIndex);
    }
 const nextSlide =()=>{
const isLastSlide = currentIndex === slides.length - 1
const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }

    const slidesDiv={
    width:'100%',
    height: '100%',
    borderRadius:'10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`
}

 return (
   <div className="section_container">
     <div className="left_arrow" onClick={previousSlide}>
       ❰
     </div>
     <div className="arrow_right" onClick={nextSlide}>
       ❱
     </div>
     <div style={slidesDiv}></div>
   </div>
 );
};

export default ImageSlider;