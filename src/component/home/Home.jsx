import React, { useState, useEffect } from "react";
import Navs from "../navbar/Navs";
import Headingtop from "./headingtop/Headingtop";
import Cruscal from "./Cruscal";
import Amazoncard from "./amazoncard/Amazoncard";
import Crusal2 from "./crusal2/Crusal2";
import Threediv from "./Threediv";
import Footer from "../footer/Footer";
import axios from "axios";

const Home = () => {
  console.log("hiiiii dolly")
  const [product1, setProduct1] = useState();
  const crusaldata = [
    
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/GW/August/Unrec_DesktopTallHero_3000x1200._CB630557043_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/MAY22/APAY/WA_3000._CB637495559_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200._CB630403302_.jpg",
  ];
  useEffect(() => {
    const fun = async () => {
      const response1 = await axios.get("https://mern-stacks-p1by.onrender.com/fashionimage1");
      setProduct1([response1.data]);
      
    };

    fun();
  }, []);
  return (
    <>
      <Navs />
      <Headingtop />
      <Cruscal arr={crusaldata} />
     
      <Amazoncard />

      {product1 ? <Crusal2 arr={product1} /> : " "}
      <Threediv />
      <Footer />
    </>
  );
};

export default Home;
