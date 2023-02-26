import React from 'react'
import bscs from "./Beauty.module.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from "react-router-dom";
import {  useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Beautylistcreater = (props) => {
    let c=props.arr.flat(Infinity)
    const navi=useNavigate();
const checking = useSelector((state) => state.counter.value1)
const notify = () => toast("Item add to card successfully!");
  return (
    <>
    {
        c.map((datas,ind)=>
        {
            return(

                <section className={bscs.toy_main_block} key={ind}>
                <img className={bscs.image2} src={datas.link} alt="" />
                <h5 className={bscs.headingss}>{datas.desc}</h5>
                <div className={bscs.add_to_Card_with_price}>
                <div className={bscs.ammount}><CurrencyRupeeIcon style={{color:"orange"}}/> <span style={{fontWeight:"600",fontSize:"1.2rem"}}>{datas.ammount}</span></div>
                <button className={bscs.add_button} onClick={()=>
                {
                checking? notify() :navi("/Login")
                }}> add to cart </button>
                <ToastContainer 
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
                </div>

                
                
                </section>
            )
        })
    }
   
    </>
  )
}

export default Beautylistcreater