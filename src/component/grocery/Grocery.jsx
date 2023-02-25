import React,{useState,useEffect} from 'react'
import grcs from "./Grocery.module.css"
import Navs from '../navbar/Navs'
import Deals1 from '../deals/deals1/Deals1'
import Footer from '../footer/Footer'
import GroceryCrusal from './GroceryCrusal'
import axios from 'axios'
const Grocery = () => {
  const[product1,setProduct1]=useState()
  useEffect(()=>
  {
    const fun = async () => {
      const response1 = await axios.get("http://localhost:8000/grocery");
      setProduct1([response1.data]);
      
    };

    fun();

  },[])
  return (
    <>
    <Navs/>
    <Deals1/>
    <img className={grcs.image1} src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_gwf_happychef_460-250722.jpg" alt=""  />
    <div className={grcs.second_image_block}>
    <img className={grcs.second_image_block1} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_paytm_360_11082022.jpg" alt=""/>
    <img className={grcs.second_image_block1} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_rbl_360_110822.jpg" alt=""/>
    <img className={grcs.second_image_block1} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_indus_360_110822.jpg" alt=""/>
    <img className={grcs.second_image_block1} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_m_aff_dbs_360_110822.jpg" alt=""/>
    </div>
    {product1?<GroceryCrusal arr={product1}/>:" "}
    <img className={grcs.image1} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1660758642_Organic-Range-for-Healthy-Diet_1680-x-320.jpg" alt="" />
    <img className={grcs.image1} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1660293655_PremiumFruits_WebBanner.jpg" alt=""/>
    
    <div className={grcs.image2_main_block}>
    
    <img className={grcs.image2_main_block_image} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1659698850_Staple-Store-600-X-350.jpg" alt="" />
    <img className={grcs.image2_main_block_image} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1659698889_600x350.jpg" alt="" />
    <img className={grcs.image2_main_block_image}src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1656790165_Web--600-x-350.jpg" alt="" />
    <img className={grcs.image2_main_block_image} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1647359679_Milk-Fest--600x350.jpg" alt="" />
    <img className={grcs.image2_main_block_image} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623423184_wm.jpg" alt="" />
    <img className={grcs.image2_main_block_image} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1656690807_Min-33-600x350.jpg" alt="" />
    </div>
    <img className={grcs.image1} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1655907871_1655839832_1655838988_1655741400_1655205887_Chocolate-Banner_1680x320.jpg" alt=""/>
    <Footer/>
    </>
  
  )
}

export default Grocery