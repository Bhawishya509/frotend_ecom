// </div>
// <img
// className={mbcs.lastimage}
// src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Digit_1500X300.jpg"
// alt=""
// />
// <img
// className="img-fluid "
// src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/laptop/msi/june/1500X300-MSI.jpg"
// alt=""
// ></img>

import ElectronicCrusal from "./ElectronicCrusal";
import Navs from "../navbar/Navs";
import Deals1 from "../deals/deals1/Deals1";
import Footer from "../footer/Footer";
import mbcs from "./Electronic.module.css";
import React, { useState, useEffect } from "react";
import Electronic2 from "./Electronic2";
import axios from "axios";
import Crusal2 from "../home/crusal2/Crusal2";
const Electronic = () => {
  const [datas, setdata] = useState();
  const [ele2data, setele2data] = useState();
  const [ele3data, setele3data] = useState();
  useEffect(() => {
    const getdata = async () => {
      let res1 = await axios.get("http://localhost:8000/Electronics");
      let res2 = await axios.get("http://localhost:8000/Electronicspr2");
      let res3 = await axios.get("http://localhost:8000/Electronicpr3");

      setdata([res1.data].flat());
      setele2data([res2.data].flat(Infinity));
      setele3data([res3.data]);
    };

    getdata();
  }, []);
  if(ele2data) {
    return (
      <>
        <Navs />
        <Deals1 />
        {datas ? <ElectronicCrusal arr={datas} /> : ""}

        <section className={mbcs.heading}>
        {ele2data ?<Electronic2 arr={ele2data} /> : ""}

        </section>
        <div className={mbcs.img2}>
        <img
          className="img-fluid "
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1659449577_1659283479_1657897108_1657641245_1657556677_1657205534_JioMart-Best-Selling-Electronics-Carousel-Banner-27_05_2022.jpg"
          alt=""
        />
      </div>
       
        {ele3data ? <Crusal2 arr={ele3data} /> : ""}

        <div className={mbcs.img2}>
          <img
            className="img-fluid "
            src="https://images-na.ssl-images-amazon.com/images/G/31/img21/audio/ele/bau/coop/1500x300_5._CB632282478_.gif"
            alt=""
          />
        </div>
        <div className={mbcs.img2}>
        <img
          className="img-fluid"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Accessories/1500X3001.jpg"
          alt=""
        />
        </div>

        

        <Footer />
      </>
    );
  } else {
    return 0;
  }
};

export default Electronic;
