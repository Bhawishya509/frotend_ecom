import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hmcs from "./Home.module.css";
const Threedivcrusal = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <section className={hmcs.main_crusal2block}>
        <div className={hmcs.btn_heading_block}>
          <h4>
            {"Up to 50% off | Best Items from Ahmedabad & Surat markets"}
            <a
              href="https://www.amazon.in/b?node=30027441031&pd_rd_w=MjcRa&content-id=amzn1.sym.8e8abae6-d35d-4a1e-9d4f-7db7ce06917a&pf_rd_p=8e8abae6-d35d-4a1e-9d4f-7db7ce06917a&pf_rd_r=SNJENWNQB2TTCBCGC13X&pd_rd_wg=aUfCS&pd_rd_r=e95f7ff6-27f3-441c-9e0c-7b959377ad60"
              alt=""
              style={{marginLeft:"6px",fontSize:"1.3rem",textDecoration:"none"}}
            >
              see all offer
            </a>
          </h4>
        </div>
        <Carousel responsive={responsive}>
          {props.arr[0].map((datas, ind) => {
            return (
              <div className={hmcs.cr2main_block} key={ind}>
                <img className={hmcs.imageclass2} src={datas} alt="" />
              
              </div>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default Threedivcrusal;
