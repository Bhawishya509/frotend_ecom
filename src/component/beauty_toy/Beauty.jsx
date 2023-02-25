import React,{useState,useEffect} from 'react'
import Navs from '../navbar/Navs'
import Deals1 from '../deals/deals1/Deals1'
import Footer from '../footer/Footer'
import bscs from "./Beauty.module.css"
import Beautylistcreater from './Beautylistcreater'
import Crusal2 from '../home/crusal2/Crusal2'
import axios from 'axios'
const Beauty = () => {
    //className={bscs.}
    const [product1,setProduct1]=useState()
    useEffect(()=>
    {
        const fun = async () => {
            const response1 = await axios.get("https://mern-stacks-p1by.onrender.com/beautypro");
            setProduct1([response1.data]);
            
          };
      
          fun();

    },[])
  return (
    <>
    
  
    <Navs/>
    <Deals1/>
    <img className={bscs.image1} src="https://blog.daraz.pk/wp-content/uploads/2019/10/Fun_Toys_Banner.png" alt="" />
    
    <div className={bscs.main_head_block}>
    <h4 className={bscs.headings}>Best Deals of days</h4>
    <div className={bscs.items_list_main_block}>
    {product1? <Beautylistcreater arr={product1}/>:""}
   
   
    </div>
    </div>
    {product1? <Crusal2 arr={product1}/>:" "}
    <img className={bscs.image1} src="https://img.freepik.com/free-psd/pediatric-care-concept-banner-style_23-2148581516.jpg?w=2000" alt="" />
    <Footer/>
    </>
  )
}

export default Beauty