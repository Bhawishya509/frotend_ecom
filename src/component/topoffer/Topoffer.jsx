import React, { useState, useEffect } from "react";
import Deals1 from "../deals/deals1/Deals1";
import Navs from "../navbar/Navs";
import AmazonCardmaking2 from "../home/amazoncard/AmazonCardmaking2";
import tpcs from "./Topoffer.module.css";
import Footer from "../footer/Footer";
import axios from "axios";
import Threedivcrusal from "../home/Threedivcrusal";
import Crusal2 from "../home/crusal2/Crusal2";
import Electronic2 from "../Electronic/Electronic2";
const Topoffer = () => {
  const [datas, setdata] = useState();
  const [datas2, setdata2] = useState();
  const [datas3, setdata3] = useState();
  const [datas4, setdata4] = useState();
  useEffect(() => {
    const getdata = async () => {
      let res1 = await axios.get("https://mern-stacks-p1by.onrender.com/toppr1");
      let res2 = await axios.get("https://mern-stacks-p1by.onrender.com/toppr2");
      let res3=await axios.get("https://mern-stacks-p1by.onrender.com/fourthProduct");
      let res4 = await axios.get("https://mern-stacks-p1by.onrender.com/toppr3");
    
      setdata([res1.data]);
      setdata2([res2.data]);
      setdata3([res3.data]);
      setdata4([res4.data]);
    };
    getdata();
  }, []);
  return (
    <>
      <section style={{ marginTop: "0.5%" }}>
        <Navs />
        <Deals1 />
        <img
          className={tpcs.top_image1}
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CrashCourse/3000x1200_Hero-Tall_NP._CB630721605_.jpg"
          alt=""
        />
        <div className={tpcs.top_offer_card}>
          <AmazonCardmaking2
            link={
              "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/HGT/GW/379X304._SY304_CB630963004_.jpg"
            }
            val={"Har Ghar Tiranga | 13th-15th August "}
          />{" "}
          <AmazonCardmaking2
            link={
              "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            }
            val={"Up to 70% off | Clearance store"}
          />{" "}
          <AmazonCardmaking2
            link={
              "https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/Option4_379x304._SY304_CB629577209_.jpg"
            }
            val={"Selling With Amazon..With Feature "}
          />{" "}
          <AmazonCardmaking2
            link={
              "https://m.media-amazon.com/images/I/615Q14LpjjL._AC_SY175_.jpg"
            }
            val={"Latest Stylish White Lamp "}
          />
        </div>
      </section>
      {datas2 ? <Threedivcrusal arr={datas2} /> : ""}
      {datas ? <Threedivcrusal arr={datas} /> : ""}
     



      <img
        className={tpcs.top_image2}
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/AdvantagePrime/BAU/25thJuly/D46321486_IN_WLME_Advantage_for_prime_PC_ingress-banner_1500x300.jpg"
        alt=""
      />
      {datas3 ? <Crusal2 arr={datas3} bol={true} /> : ""}

      <div className={tpcs.last_block_ha}>
      {datas4 ?<Electronic2 arr={datas4} bol={true}/> : ""}
      </div>
      
    

      <Footer />
    </>
  );
};

export default Topoffer;
