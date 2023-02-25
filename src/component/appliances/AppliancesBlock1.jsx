import React from "react";
import apcs from "./Appliances.module.css";
const Appliances_block1 = (props) => {
  return (
    <>
      <div className={apcs.block_1}>
        <div className={apcs.block_1_text}>
          <p className={apcs.block_1_text_para}>{props.text}</p>
          <div className={apcs.block_1_text_second_para}>{props.text2}</div>
        </div>
        <img
        className={apcs.block_1_img}
          src={props.link}
          alt=""
        />
      </div>
    </>
  );
};

export default Appliances_block1;
