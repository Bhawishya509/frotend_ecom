import React from "react";
import ftcs from "./Footer.module.css";
import { CDBFooter,  CDBBtn, CDBIcon, CDBBox } from "cdbreact";
const Footer = () => {
  return (
    <>
      <CDBFooter className={ftcs.shadow}>
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a  href="/" className="d-flex align-items-center p-0 text-dark">
                <img
                  alt="logo"
                  src="data:image/jpeg;base64,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"
                  width="30px"
                />
                <span className="ml-3 h5 font-weight-bold" style={{marginLeft:"2%"}}>Flipkart</span>
              </a>
              <p className="my-3" style={{ width: "250px",fontWeight:"600" }}>
                We are Selling High Quality Cloths With Low Prize Brand New
                Cloths As Well As Also Proveding Some Functionlities To Selling A
                Cloth With Us..
              </p>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Website
              </p>
              <CDBBox
                flex="column"
                display="flex"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a className={ftcs.ancher} href="/">Products</a>
                <a className={ftcs.ancher} href="/">About Us</a>
                <a className={ftcs.ancher} href="/">Contact</a>
                <a className={ftcs.ancher} href="/" >Blog</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Help
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a className={ftcs.ancher} href="/">Support</a>
                <a className={ftcs.ancher} href="/">Sign Up</a>
                <a className={ftcs.ancher} href="/">Sign In</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Products
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <a className={ftcs.ancher} href="/">Windframe</a>
                <a className={ftcs.ancher} href="/">Loop</a>
                <a className={ftcs.ancher} href="/">Contrast</a>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="center"
            style={{ width: "100%" }}
            className="mx-auto mt-4"
          >
            <CDBBtn flat color="dark" className="p-2" style={{borderRadius:"50%"}}>
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2" style={{borderRadius:"48%"}}>
              <CDBIcon fab icon="linkedin" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2" style={{borderRadius:"50%"}}>
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </CDBBox>
          <small className="text-center mt-5">
            &copy; Bhawishya Singh, 2022. All rights reserved.
          </small>
        </CDBBox>
      </CDBFooter>
    </>
  );
};

export default Footer;
