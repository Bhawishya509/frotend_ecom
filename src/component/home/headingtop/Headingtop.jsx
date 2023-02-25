import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import htcs from "./HeadingTop.module.css";
import { useNavigate } from "react-router-dom";
const Headingtop = () => {
  const [lists] = useState([
    "Top-offers",
    "Grocery",
    "Mobiles",
    "Fashion",
    "Electronics",
    "Homes",
    "Appliances",
    "Travel",
    "Beauty-Toys-More",
  ]);
  let navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <>
      <Card variant="outlined" className={htcs.headtop}>
        {lists.map((datas, ind) => {
          let BgImg = `image/${ind + 1}-removebg-preview.png`;
          return (
            <section
              className={htcs.mainsection}
              onClick={() => {
                navigate(`/${datas}`);
              }}
              key={ind}
            >
              <img className={htcs.mainimg} src={BgImg} alt="" />
              <div className={htcs.mainimgtext}>{datas}</div>
            </section>
          );
        })}
      </Card>
    </>
  );
};

export default Headingtop;
