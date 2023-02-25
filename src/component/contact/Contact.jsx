import React from "react";
import "./Contact.css";
import Navs from "../navbar/Navs";
import Footer from "../footer/Footer";
import Deals1 from "../deals/deals1/Deals1";
function Contact() {
  return (
    <>
    
    <Navs/>
    <Deals1/>
    <img className="Contact_photo1" src="https://www.dsci.in/sites/default/files/whats-new.jpg" alt=""/>
 
    <div className="about">
      <h1>Contact Us</h1>
      <p>Hello, wishes from rideontrek.com</p>
      <br />
      <p>
        Trek Bicycle Corporation is a bicycle and cycling product manufacturer
        and distributor under brand names Trek, Electra Bicycle Company,
        Bontrager, and Diamant Bikes. The company has previously manufactured
        bikes under the Gary Fisher, LeMond Racing Cycles, Klein, and Villiger
        Bikes brand names.
      </p>
      <br />
      <p>
        Trek bikes are very good. Trek has a long history of making quality
        bikes that are used by beginner, hobby, and elite cyclists around the
        world. Trek bikes last for a long time and have excellent reselling
        value years after purchase.
      </p>
      <br />

      <h3>Browse through some of our videos</h3>
      <br />
     
      <form>
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">text</label>
    <textarea rows="4" cols="50" type="text-area" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
    <img className="Contact_photo1" src="https://thumbs.dreamstime.com/b/contact-us-customer-support-hotline-people-connect-call-customer-support-contact-us-customer-support-hotline-people-connect-call-129786983.jpg" alt=""/>
    <Footer/>
    </>
  );
}

export default Contact;