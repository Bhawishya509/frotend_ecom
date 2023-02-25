import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import cr2cs from "./Crusal2.module.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Crusal2 = (props) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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
    <section className={cr2cs.main_crusal2block} >
   
    <div className={cr2cs.btn_heading_block}>
    <h4>{"Fashion Top Deals"}</h4>
    <Button
      variant="contained"
      style={{ fontWeight: "600", fontSize: "0.9rem" }}
    >
      View All
    </Button>
     </div>
        <Carousel responsive={responsive} >
        {
          props.arr[0].map((datas,ind)=>
          {
          return(
            <div className={cr2cs.cr2main_block} key={ind}>
            <img
              className={cr2cs.imageclass2}
              src={datas.link} alt=""

            />
            
            <div className={cr2cs.title1}>{datas.productname} </div>
            <div className={cr2cs.title2}>
            {props.bol?<CurrencyRupeeIcon 
            style={{fontSize:"1rem",color:"orange",fontWeight:"600"}}/>:""}{datas.prize}</div>
            <div className={cr2cs.title3}>{datas.desc}</div>
          </div>
          )
          })
        }
       
        </Carousel>
        </section>
       
      
    </>
  );
};
export default Crusal2;
