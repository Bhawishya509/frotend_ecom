
import hmscs from "./Homes.module.css"
import Navs from '../navbar/Navs'
import Deals1 from '../deals/deals1/Deals1'
import Footer from '../footer/Footer'
import axios from "axios";
import React, { useState, useEffect } from "react";
import AmazonCardmaking2 from '../home/amazoncard/AmazonCardmaking2'
import Electronic2 from '../Electronic/Electronic2'
//ClassName={hmscs.}
const Homes = () => {
  const [ele2data, setele2data] = useState();
  useEffect(() => {
    const getdata = async () => {
      let res2 = await axios.get("https://mern-stacks-p1by.onrender.com/Electronicspr5");
      setele2data([res2.data]);
    };

    getdata();
  }, []);
  return (
    <>
    <Navs/>
    <Deals1/>
    <img className={hmscs.image1} src="https://images.ctfassets.net/5de70he6op10/uERMiWeCymEqd8YQqH8m5/e8df1f498181bbc32fe4c324ec018444/Furniture_Gateway_12.jpg?w=1302&q=80&fm=webp" alt="" />
    <div className={hmscs.amazon_block}>
    <AmazonCardmaking2
    link={"https://m.media-amazon.com/images/I/61ebhwmcuqL._SX425_.jpg"}
    val={"Stylish-Sofa"}
    desc={"Comfort-with High Fibric Stating At Rs 8000 to Up TO Rs 65000"}/>
    <AmazonCardmaking2
    link={"https://royaloakindia.com/media/catalog/product/cache/b755e654c4262a305b9079757b19ef10/r/o/royaloak-arrow-office-table-1-2m-1.jpg"}
    val={"Computer-Table"}
    desc={"Stylish Computer Table With High Quality Fiber Statring Rs 5000"}/>
    <AmazonCardmaking2
    link={"https://www.ikea.com/in/en/images/products/gladstad-upholstered-bed-frame-kabusa-light-grey__1056449_ph182866_s5.jpg?f=s"}
    val={"Double-Bed"}
    desc={"Comfotable Doble Bed With High Quality Cotten  Stating Rs 30000"}/>
    <AmazonCardmaking2
    link={"https://5.imimg.com/data5/FE/WU/MY-45703978/modern-carpet-tiles-500x500.jpg"}
    val={"Stylish-Carpet"}
    desc={"It Made By Slicon With High Quality Fiber Stating Rs 2000 "}/>
    <AmazonCardmaking2
    link={"https://www.luckyfurniture.in/wp-content/uploads/2018/07/dining-table-18-650x750.jpg"}
    val={"Dinning-Table"}
    desc={"Up to 4 People Can Eat At A Same Time Stating Rs 7000 "}/>
    <AmazonCardmaking2
    link={"https://rukminim1.flixcart.com/image/300/300/jy4q3680/computer-table/9/s/b/mdf-medium-density-fiber-56121509sd00051-godrej-interio-black-original-imafgfte7vgphxzy.jpeg?q=90"}
    val={"Computer-Table"}
    desc={"With Cotten Matter Statring Rs 2000 to Rs 2000"}/>
    <AmazonCardmaking2
    link={"https://secure.img1-fg.wfcdn.com/im/98504986/c_crop_resize_zoom-h624-w900%5Ecompr-r85/1391/139101543/default_name.jpg"}
    val={"Wall-Mirror"}
    desc={"Stylish Crystal Clear Mirror Statring Rs 6000 To Rs 15000"}/>
    <AmazonCardmaking2
    link={"https://extremehowto.com/wp-content/uploads/2018/01/RM1.jpg"}
    val={"Roof-Slate"}
    desc={"This Is Roof Slate It Reduce Hot As Well AS Proctect From Rain"}/>
    <AmazonCardmaking2
    link={"https://ii1.pepperfry.com/media/catalog/product/f/l/800x880/flower-pot-cover-stand---high-quality-wooden-garden-plant---pot-cover-stand-for-outdoor---indoor-dec-cpvnwr.jpg"}
    val={"Wood-Pot"}
    desc={"It Is Flower Pot With Starting Rs 2000 to RS 5000"}/>
    <AmazonCardmaking2
    link={"http://cdn.shopify.com/s/files/1/0092/7085/3691/products/AdobeStock_72851397_1200x1200.jpg?v=1577290967"}
    val={"Wall-Door"}
    desc={"This Is Wall Door With High Fiber Wood Quality Up to Rs 6000"}
    />
    <AmazonCardmaking2
    link={"https://img.archiexpo.com/images_ae/photo-mg/80294-8609932.jpg"}
    val={"Parking-Banch"}
    desc={"This Is Parking Banch With High Quality Iron And Also ConfortZone"}/>
    <AmazonCardmaking2
    link={"https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1445240243810-3W3IFJ9SMW56F5CU9DGF/vertical+succulent+garden+on+a+modern+wood+fence"}
    val={"Garden-Wall"}
    desc={"Garding Wood With Soild Color Stating Up To Rs 2000 to Rs 5000"}/>
    </div>
   <img className={hmscs.image2}src="https://media.cnn.com/api/v1/images/stellar/prod/220401155552-underscored-carpet-cleaning-body-image.jpg?c=original" alt="" />
    <div className={hmscs.electrnic2_block}>
  
   {ele2data ?<Electronic2 arr={ele2data} /> : ""}
 
   </div>
   <img className={hmscs.image3} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=1200:*" alt=""/>
    <Footer/>
  
    
    </>
  )
}

export default Homes