import React from 'react'
import mbcs from "./Electronic.module.css"
import { useNavigate } from "react-router-dom";
import {  useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Electronic2 = (props) => {
let c=props.arr.flat(Infinity)
const navi=useNavigate();
const checking = useSelector((state) => state.counter.value1)
const notify = () => toast("Item add to card successfully!");
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
          <button className={mbcs.add_button} onClick={()=>
          {
            checking? notify() :navi("/Login")
          }}>Add to Cart</button>
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
          <img className={mbcs.image} src= {datas.link} alt=''></img>
          </section>
    )})}

    
      
      </>
    )
  }

export default Electronic2