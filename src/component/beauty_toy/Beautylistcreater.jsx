import React from 'react'
import bscs from "./Beauty.module.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Beautylistcreater = (props) => {
    let c=props.arr.flat(Infinity)
  return (
    <>
    {
        c.map((datas,ind)=>
        {
            return(

                <section className={bscs.toy_main_block} key={ind}>
                <img className={bscs.image2} src={datas.link} alt="" />
                <h5 className={bscs.headingss}>{datas.desc}</h5>
                <div className={bscs.ammount}><CurrencyRupeeIcon style={{color:"orange"}}/> <span style={{fontWeight:"600",fontSize:"1.2rem"}}>{datas.ammount}</span></div>
                </section>
            )
        })
    }
   
    </>
  )
}

export default Beautylistcreater