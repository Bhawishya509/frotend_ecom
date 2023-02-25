import React from 'react'
import mbcs from "./Electronic.module.css"

const Electronic2 = (props) => {
let c=props.arr.flat(Infinity)
    return (
      <>
      {c.map((datas,ind)=>
        {
          return(

          
          <section className={mbcs.img_text_main_block}
          key={ind}>
  
          <div className={mbcs.img_text_block}>
          <div className={mbcs.heading1}>{datas.name}</div>
          <div className={mbcs.heading1}>{datas.desc}</div>
          <div className={mbcs.heading2}>Rs {datas.prize}</div>
          </div>
          <img className={mbcs.image} src= {datas.link} alt=''></img>
          </section>
    )})}

    
      
      </>
    )
  }

export default Electronic2