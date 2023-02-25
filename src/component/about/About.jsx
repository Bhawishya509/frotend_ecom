import React from 'react'
import Navs from '../navbar/Navs'
import Deals1 from '../deals/deals1/Deals1'
import Footer from '../footer/Footer'
import "./About.css"
const About = () => {
  return (
    <>
    <Navs/>
    <Deals1/>
   
    <img className="about_image" src="https://g7technology.net/wp-content/uploads/2019/02/g7technology-ecommerce-development.jpg" alt=""/>
    <img className="about_image" src="https://imgscf.slidemembers.com/docs/1/1/358/market_strategy_presentation_slide_357212.jpg" alt=""  />

    <img className="about_image" src="https://www.rcatheme.com/images/docs/gtishop/why-choose-us.png" alt="" />
    <img className="about_image" src="https://imgscf.slidemembers.com/docs/1/1/355/our_services_slide_deck_template_354456.jpg" alt=""/>
    <Footer/>
    </>
    )

}

export default About