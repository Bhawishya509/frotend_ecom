
import React,{useState,useEffect} from "react";
import axios from "axios";
import mbcs from "./Mobile.module.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from "react-router-dom";
import {  useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const MobileItems = () => {
  const [datas,setdata]=useState()
  const navi=useNavigate();
const checking = useSelector((state) => state.counter.value1)
const notify = () => toast("Item add to card successfully!");
  useEffect(()=>
  {
    const getdata=async()=>
    {
      const res=await axios.get("https://mern-stacks-p1by.onrender.com/fourthProduct");
      setdata([res.data])
     
    }
    getdata()
  },[])
  
  if(datas)
  {
    return (
      <>
      {datas[0].map((datass,ind)=>
        {
          return(
           
            <div className={mbcs.mobile_items} key={ind}>
            <img
              className="img-fluid"
              src={datass.link}
              alt=""
            />
            <div className={mbcs.image_text}>
             {datass.name}
              <div className={mbcs.mobile_prize}>
                <span style={{ color: "#FF8C2A",fontSize:"1.4rem" }} >
                <sup><CurrencyRupeeIcon style={{fontSize:"1.5rem"}}/></sup></span>{datass.prize}
                <span className={mbcs.h2s}>{datass.fake_prize}</span>
                <span className={mbcs.h2s}>({datass.percent}% off)</span>
              </div>
              <div className={mbcs.h2ss}>{datass.bank_offer}</div>
              <div className={mbcs.h2ss}>
                {datass.delivery_date}
              </div>
            </div>
            <button className={mbcs.add_button} onClick={()=>
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
  
          )
        })}
       
      </>
    );

  }
     
};

export default MobileItems;
