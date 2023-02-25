import React from 'react'
import amcs from "./Amazoncard.module.css"
const AmazonCardmaking2 = (props) => {
  return (
    <>
    <section className={amcs.am2cardbox}>
    <h4>{props.val}</h4>
    <img className={amcs.am2photo} src={props.link} alt=''></img>
    <a href=" " className={amcs.am2anchertag}>see more</a>
    <div style={{fontWeight:"700"}}>{props.desc}</div>
    </section>
    
    </>
  )
}

export default AmazonCardmaking2