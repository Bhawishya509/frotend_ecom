import React,{useState,useEffect} from "react";
import hmcs from "./Home.module.css";
import Electronic2 from "../Electronic/Electronic2";
import Threedivcrusal from "./Threedivcrusal";
import axios from "axios";
const Threediv = () => {
  const [ele2data,setele2data]=useState()
  const [hmpr,sethmpr]=useState()
  useEffect(() => {
    const getdata = async () => {
      let res1 = await axios.get("https://mern-stacks-p1by.onrender.com/Electronicspr2");
      let res2 = await axios.get("https://mern-stacks-p1by.onrender.com/hmpr");
      
      setele2data([res1.data].flat(Infinity));
      sethmpr([res2.data])
    };

    getdata();
  }, []);
  return (
    <>
      <section className={hmcs.threediv_main}>
        <div className={hmcs.threediv1}>
          <img
            className={hmcs.threediv1subclass1}
            src="https://sslimages.shoppersstop.com/sys-master/root/hd9/h1e/27948428001310/ZINKLONDON-Carousel-web-1840x500--sp-brands-new-hp-upto-060-20220726.jpg"
            alt=""
            ></img>
        
        </div>
        <div className={hmcs.heading}>
        {ele2data ? <Electronic2 arr={ele2data} /> : ""}
          <div className={hmcs.threediv1}>
          <img
            className={hmcs.threediv1subclass1}
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
            ></img>
        
        </div>
        {hmpr?<Threedivcrusal arr={hmpr}/>:""}

        

       </div>
       <div className={hmcs.threediv1}>
       <img
         className={hmcs.threediv1subclass3}
         src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/akull/Rewards/EBB/D47911944_INWLD_Rewards-Festival_Catpage-banners_PC_1500x300.jpg"
         alt=""
         ></img>
     
     </div>

     
        
      </section >
     
    </>
  );
};

export default Threediv;
