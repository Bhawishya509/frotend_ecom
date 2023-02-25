import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import mbcs from "./Electronic.module.css"
const ElectronicCrusal = (props) => {
  
  return (
    <>
    <Carousel className={mbcs.photo_main_block}>

    {props.arr.map((datass,ind)=>
      {
        return(
          <Carousel.Item interval={3000} className={mbcs.photo_cover}
          key={ind}>

          <img
            className={mbcs.Carusal_image}
            src={datass}
            alt="First slide"
          />
        </Carousel.Item>
        )
      })}
     
 
      
    </Carousel>
    
    </>
  )
}

export default ElectronicCrusal