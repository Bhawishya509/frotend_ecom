import React,{useEffect,useState}from 'react'
import fscs from "./Fashion.module.css";
import Navs from '../navbar/Navs';
import Deals1 from '../deals/deals1/Deals1';
import Footer from '../footer/Footer';
import axios from 'axios';
import Crusal2 from '../home/crusal2/Crusal2';
import Cruscal from '../home/Cruscal';
import Threedivcrusal from '../home/Threedivcrusal';
import AmazonCardmaking2 from '../home/amazoncard/AmazonCardmaking2';
const Fashion = () => {
  const [datas,setdata]=useState()
  const [datas2,setdata2]=useState()
  const [datas3,setdata3]=useState()
  const crusaldata=[
    "https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Augart22/BXGY/PC/3._SX3000_QL85_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Augart22/BXGY/PC/2._SX3000_QL85_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Augart22/BXGY/PC/1._SX3000_QL85_.jpg",
   
  ]
  useEffect(()=>
  {
    const getdata=async()=>
    {
      let res=await axios.get("https://mern-stacks-p1by.onrender.com/fashionimage1")
      let res2 = await axios.get("https://mern-stacks-p1by.onrender.com/hmpr")
      let res3 = await axios.get("https://mern-stacks-p1by.onrender.com/firstProduct")
      setdata([res.data])
      setdata2([res2.data])
      setdata3([res3.data])
    }
    getdata()
  })
  return (
    <>
    <Navs/>
    <Deals1/>
    
    <Cruscal arr={crusaldata}/>
    <img className={fscs.image1} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Augart/Bankkd/Bank_Stripe_Unrec_en.jpg
    " alt=""  />
    <img className={fscs.image4} src=" https://images-na.ssl-images-amazon.com/images/G/31/img21/Strategic_Partnership/July2022/SS_Spotlight/WesternWear._CB631644503_.gif
    " alt=""  />

   
















    <div className={fscs.fashion_list_block}>
    <h4 className={fscs.heading}>Check Out These Super Savers</h4>
    <div className={fscs.fashion_list}>
    <img
    className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/inthespotlight/4-CML._CB626618829_.gif" alt="" />
    <img  className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/inthespotlight/2-fashion._CB626618866_.jpg" alt=""  />
    <img  className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/inthespotlight/d._CB626833835_.jpg" alt=""  />
    <img   className={fscs.images}src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/inthespotlight/s._CB626833835_.jpg" alt=""  />
    <img  className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/CML/2._SS400_QL85_.jpg" alt=""  />
    <img className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/CML/3._SS400_QL85_.jpg" alt=""  />
    <img className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/CML/4._SS400_QL85_.jpg" alt=""  />
    <img className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/CML/5._SS400_QL85_.jpg" alt=""  />
    <img className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/CML/6._SS400_QL85_.jpg" alt=""  />
    <img className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/CML/1._SS400_QL85_.jpg" alt=""  />
    <img className={fscs.images} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/CML/8._SS400_QL85_.jpg" alt=""  />
    <img className={fscs.images} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/Kids/7-kids_05.jpg" alt=""  />
    </div>
    </div>

    <img className={fscs.image3} src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Jewellery/2022/April/XCM/coop/3-zp-5._CB636583608_.gif
    " alt=""  />
    <div className={fscs.amazonCard2}>

   <AmazonCardmaking2
   link={"https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/Featuredstore/5._CB636916548_.gif"}
   desc={"Under - 599"}/>
   <AmazonCardmaking2
   link={"https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/Featuredstore/B2office_1._CB636913241_.gif"}
   desc={"Up To 60% Off"}/>
   <AmazonCardmaking2
   link={"https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/Featuredstore/7._CB636916548_.gif"}
   desc={"Up to 35% Off"}/>
   <AmazonCardmaking2
   link={"https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/XCM/Featuredstore/8._CB636916548_.gif"}
   desc={"Up to 40% Off"}/>
   </div>
    
   




























    {datas?<Crusal2 arr={datas} />:""}
    <img className={fscs.image2} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/Header/English/XCM/Af-Unrec-PC._CB632201785_.gif
    " alt=""  />
    
    {datas2?<Threedivcrusal arr={datas2} />:""}
    {datas3?<Crusal2 arr={datas3} />:""}
    <img className={fscs.image1} src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/augart22/lastday/unrec/PC1._CB629174804_.jpg" alt=""  />

    


    <Footer/>
    
    </>
  
  )
}

export default Fashion