import React from "react";
import Navs from "../../navbar/Navs";
import dl1cs from "./Deals1.module.css";
import { useNavigate } from "react-router-dom";
const Deals1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navs />
      <section className={dl1cs.main_deal1block}>
        <div className={dl1cs.heading_block}>
          <div
            className={dl1cs.deal_list}
            onClick={() => {
              navigate("/Electronics");
            }}
          >
            {"Electronics"}
          </div>
          <div
            className={dl1cs.deal_list}
            onClick={() => {
              navigate("/Appliances");
            }}
          >
            {"TVs & Appliances"}
          </div>
          <div
            className={dl1cs.deal_list}
            onClick={() => {
              navigate("/Fashion");
            }}
          >
            {"Men"}
          </div>
          <div
            className={dl1cs.deal_list}
            onClick={() => {
              navigate("/Fashion");
            }}
          >
            {"Women"}
          </div>
          <div
            className={dl1cs.deal_list}
            onClick={() => {
              navigate("/Beauty-Toys-More");
            }}
          >
            {"Baby & Kids"}
          </div>
          <div
            className={dl1cs.deal_list}
            onClick={() => {
              navigate("/Homes");
            }}
          >
            {"Home & Furniture"}
          </div>
          <div className={dl1cs.deal_list}
          onClick={() => {
            navigate("/");
          }}
          >{"Sports, Books & More"}</div>
          <div
            className={dl1cs.deal_list}
            onClick={() => {
              navigate("/Travel");
            }}
          >
            {"Flights"}
          </div>
          <div
            className={dl1cs.deal_list}
            onClick={() => {
              navigate("/Top-offers");
            }}
          >
            {"Offer Zone"}
          </div>
        </div>
      </section>
    </>
  );
};

export default Deals1;
