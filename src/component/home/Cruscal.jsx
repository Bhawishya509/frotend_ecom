import React,{useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";

import hmcs from "./Home.module.css";

const Cruscal = (props) => {
  const data=props.arr.flat();
  
  useEffect(()=>
  {

  },[])
  return (
    <>
      <Carousel className={hmcs.photo_main_block}>

      {data.map((datass,ind)=>
        {
          return(
            <Carousel.Item interval={3000} className={hmcs.photo_cover}
            key={ind}>

            <img
              className="img-fluid"
              src={datass}
              alt="First slide"
            />
          </Carousel.Item>
          )
        })}
       
   
        
      </Carousel>
    </>
  );
};

export default Cruscal;
