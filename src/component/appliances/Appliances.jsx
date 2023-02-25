import React, { useState, useEffect } from "react";
import Navs from "../navbar/Navs";
import Deals1 from "../deals/deals1/Deals1";
import Footer from "../footer/Footer";
import apcs from "./Appliances.module.css";
import AppliancesBlock1 from "./AppliancesBlock1";
import Crusal2 from "../home/crusal2/Crusal2";
import axios from "axios";
const Appliances = () => {
  const [product1, setProduct1] = useState();
  const [product2, setProduct2] = useState();
  useEffect(() => {
    const fun = async () => {
      const response1 = await axios.get("http://localhost:8000/appliancesproduct");
      const response2 = await axios.get("http://localhost:8000/Electronicpr3");
      setProduct1([response1.data]);
      setProduct2([response2.data]);
    };

    fun();
  }, []);
  return (
    <>
      <Navs />
      <Deals1 />
      <img
        className={apcs.image1}
        src="https://assetscdn1.paytm.com/images/catalog/view_item/901092/1633100041750.jpg?imwidth=1600&impolicy=hq"
        alt=""
      />
      <div className={apcs.Appliances_block1_head}>
        <AppliancesBlock1
          link={
            "https://rukminim1.flixcart.com/image/150/150/ku4ezrk0/television/a/i/z/l43m6-inc-mi-original-imag7bgpgcrfh2ns.jpeg?q=70"
          }
          text={"Televison"}
          text2={"Up To 75% Off"}
        />
        <AppliancesBlock1
          link={
            "https://www.bajajfinserv.in/Window_AC_image_1_new_01.2_Window-AC_345x202px.jpg"
          }
          text={"Air Conditioners"}
          text2={"Up To 55% Off"}
        />
        <AppliancesBlock1
          link={
            "https://rukminim1.flixcart.com/image/612/612/jt4olu80/mixer-grinder-juicer/z/j/d/bosch-mgm8642bin-original-imafecy88fj6fepc.jpeg?q=70"
          }
          text={"Kitchen Appliances"}
          text2={"Up To 75% Off"}
        />
        <AppliancesBlock1
          link={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJ5govapx6kpwxhwv2ncB7j5nx7-R3jORXz_MjQlsA-4bLr1QEbWy2cwUmCgHOO1zaZU&usqp=CAU"
          }
          text={"Washing Machines"}
          text2={"Up To 50% Off"}
        />
        <AppliancesBlock1
          link={
            "https://rukminim1.flixcart.com/image/612/612/l1nwnm80/dishwasher-new/n/x/s/-original-imagd6hjawutfgdz.jpeg?q=70"
          }
          text={"DishWashers"}
          text2={"Up To 55% Off"}
        />
        <AppliancesBlock1
          link={"https://www.mylloyd.com/media/products/1_zoom9.jpg"}
          text={"Refrigerators"}
          text2={"Up To 45% Off"}
        />
        <AppliancesBlock1
          link={
            "https://rukminim1.flixcart.com/image/612/612/ku79vgw0/fan/e/l/e/studio-ceiling-fan-atomberg-original-imag7dqqwzjjsrvf.jpeg?q=70"
          }
          text={"Fan & Air Coolers"}
          text2={"Up To 50% Off"}
        />
        <AppliancesBlock1
          link={
            "https://rukminim1.flixcart.com/image/612/612/k5ihzm80/inverter/v/k/z/zelio-1100-12v-luminous-original-imafz6gnztg3p8fg.jpeg?q=70"
          }
          text={"Home Appliances"}
          text2={"Up To 50% Off"}
        />
      </div>
      <img
        className={apcs.image3}
        src="https://assetscdn1.paytm.com/images/catalog/view_item/884083/1630911645024.jpg?imwidth=480&impolicy=hq"
        alt=""
      />
      <img
        className={apcs.image4}
        src="https://assetscdn1.paytm.com/images/catalog/view_item/905464/1633588959398.jpg?imwidth=480&impolicy=hq"
        alt=""
      />
      {product1 ? <Crusal2 arr={product1} /> : ""}
      <img
        className={apcs.image1}
        src="https://assetscdn1.paytm.com/images/catalog/view_item/699860/1609225234348.jpg?imwidth=1600&impolicy=hq"
        alt=""
      />
      {product2 ? <Crusal2 arr={product2} /> : ""}
      <Footer />
    </>
  );
};

export default Appliances;
