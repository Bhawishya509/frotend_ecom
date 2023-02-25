import React from 'react'
import trcs from "./Travel.module.css";

const Travel2 = (props) => {

  return (
    <div className={trcs.card_main_block} style={{backgroundImage:`url(${props.link})`}}>
    <div className={trcs.card_block1}>{props.text1}</div>
    <div className={trcs.card_block2}>{props.text2}</div>
    <div  className={trcs.card_block3}>{"Use Code:"} <span style={{color:"white"}}>{props.text3}</span></div>
    <button className={trcs.card_block4}>{"BOOK NOW"}</button>
    </div>
  )
}

export default Travel2