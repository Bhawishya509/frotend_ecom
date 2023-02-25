import React from "react";
import AmazonCardmaking2 from "./AmazonCardmaking2";
import amcs from "./Amazoncard.module.css";
const Amazoncard = () => {
  return (
    <>
      <section className={amcs.amheading}>
        <AmazonCardmaking2
          link={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
          }
          val={"Up to 70% off | Clearance store"}
        />
        <AmazonCardmaking2
          link={
            "https://rukminim1.flixcart.com/image/800/960/xif0q/shoe/x/d/p/9-cb-2-1258-red-1259-bk-saimon-black-red-original-imag4chgf4wyjcrb-bb.jpeg?q=50"
          }
          val={"Up to 40% | Shoes Cleance"}
        />
        <AmazonCardmaking2
          link={
            "https://media.istockphoto.com/photos/cute-pink-bear-doll-with-bow-isolated-on-white-background-with-shadow-picture-id952081702?k=20&m=952081702&s=612x612&w=0&h=NTdnJREV0IbjitgPLH2N2GO8nCAQbGFGWd_fSwR2JDM="
          }
          val={"Best Toy Forever Up To 60% Off "}
        />
        <AmazonCardmaking2
          link={
            "https://rukminim1.flixcart.com/image/800/960/xif0q/shopsy-t-shirt/s/3/0/s-nmp-try-this-original-imag5xe3sdhgg8sg-bb.jpeg?q=50"
          }
          val={" Best Tshirt For Girl In Silly Prize "}
        />
        <AmazonCardmaking2
          link={
            "https://rukminim1.flixcart.com/image/416/416/kyeqjrk0/shopsy-vase/h/v/p/12-tpot-14-wh-homspurts-15-original-imaganafhjzqf4cs.jpeg?q=70"
          }
          val={"Beautyfull Pot up to 20%  Off"}
        />
        <AmazonCardmaking2
          link={
            "https://rukminim1.flixcart.com/image/416/416/kh0vonk0/lipstick/m/y/c/3-6-9to5-primer-matte-lip-color-mr4-lakme-original-imafx4pz43gzwxhh.jpeg?q=70"
          }
          val={"Lorea 9T06 Primer Matte Lip Color Roseate"}
        />
        <AmazonCardmaking2
          link={
            "https://rukminim1.flixcart.com/image/416/416/xif0q/bed/q/k/j/-original-imaggn8kupubhvst.jpeg?q=70"
          }
          val={
            "Stylish Doube Bed Hevey Matters Up To 30% off"
          }
        />
        <AmazonCardmaking2
          link={
            "https://rukminim1.flixcart.com/image/416/416/k73nlow0/headphone/t/e/e/boat-rockerz-370-original-imafpef5gnphxhzf.jpeg?q=70"
          }
          val={"Latest bOAT sHeadPhone With  HighSpeed "}
        />
      </section>
    </>
  );
};

export default Amazoncard;
