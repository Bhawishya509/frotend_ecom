//
import Crusal2 from "../home/crusal2/Crusal2";
import React, { useState, useEffect } from "react";
import mbcs from "./Mobile.module.css";
import Bestseller from "./Bestseller";
import Navs from "../navbar/Navs";
import Deals1 from "../deals/deals1/Deals1";
import Footer from "../footer/Footer";
import MobileItems from "./MobileItems";
import axios from "axios";
const Mobile = () => {
  const [datas, setdata] = useState();
  useEffect(() => {
    const fun = async () => {
      const res = await axios.get("https://mern-stacks-p1by.onrender.com/fourthProduct");
      setdata([res.data]);
    };

    fun();
  }, []);

  return (
    <>
      <Navs />
      <Deals1 />
      <div className={mbcs.mobile_main_block}>
        <img
          style={{ width: "100%" }}
          src=" https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/shasvijo/SUD_AUG_11_14/2PC_header_with-out_01.jpg"
          className="img-fluid"
          id={mbcs.image}
          alt="..."
        ></img>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Augart/Bankkd/Bank_Stripe_Unrec_en.jpg"
          className="img-fluid"
          alt="..."
        ></img>
        <div className={mbcs.shop_by_prize}>{"Shop By Prize"}</div>
        <div className={mbcs.line}></div>
        <div className={mbcs.mobile_list_head_block}>
          <div className={mbcs.prize_block}>
            <div className={mbcs.prize}>Below 5000</div>
            <div className={mbcs.prize}>5000-10000 </div>
            <div className={mbcs.prize}>10000-15000</div>
            <div className={mbcs.prize}>15000-20000</div>
            <div className={mbcs.prize}>20000-25000</div>
            <div className={mbcs.prize}>Above 25000 </div>
          </div>
          <div className={mbcs.item_list_number}>
            1-12 of over 30,00 results for{" "}
            <span style={{ color: "orange", marginLeft: "0.50%" }}>
              Mobiles & Accessories
            </span>
          </div>
          <div className={mbcs.mobile_items_block}>
            <MobileItems />
          </div>
          <div className={mbcs.all_result_btn}>See All Results</div>
          {datas ? <Crusal2 arr={datas} bol={true} /> : " "}
        </div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/akull/Rewards/EBB/D47911944_INWLD_Rewards-Festival_Catpage-banners_PC_1500x300.jpg"
          className="img-fluid mt-3"
          alt="..."
        ></img>
      </div>
      <div className={mbcs.imglists}>
        <Bestseller />
      </div>
      <img
        src="     https://images-eu.ssl-images-amazon.com/images/G/31/img22/laptop/msi/june/1500X300-MSI.jpg"
        className="img-fluid mt-3"
        alt="..."
      ></img>

      <Footer />
    </>
  );
};

export default Mobile;
