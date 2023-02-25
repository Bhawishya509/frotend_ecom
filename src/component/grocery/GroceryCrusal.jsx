import React from 'react'
import Carousel from "react-multi-carousel";
import grcs from "./Grocery.module.css"
import "react-multi-carousel/lib/styles.css";
const GroceryCrusal = (props) => {
    let c=props.arr.flat(Infinity)
  
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
    
  return (
    <>
    
    <Carousel responsive={responsive} className={grcs.main_crusal_block} >
    {
      c.map((datas,ind)=>
      {
      return(
        <div className={grcs.cr2main_block} key={ind}>
        <img
          className={grcs.imageclass2}
          src={datas} alt=""

        />
        
      </div>
      )
      })
    }
   
    </Carousel>
    </>
  )
}

export default GroceryCrusal