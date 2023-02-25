import React, { useState, useEffect } from "react";
import Navs from "../navbar/Navs";
import Footer from "../footer/Footer";
import Deals1 from "../deals/deals1/Deals1";
import trcs from "./Travel.module.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import DatePicker from "react-date-picker";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Travel2 from "./Travel2";
const Travel = () => {
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState(new Date());
  useEffect(() => {}, []);
  return (
    <>
      <Navs />
      <Deals1 />
      <section className={trcs.image1}>
        <div className={trcs.getset}>Get. Set. Travel.</div>
        <div className={trcs.trip_main_block}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            style={{ marginLeft: "2%" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="One Way"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Round Trip"
            />
          </RadioGroup>

          <div className={trcs.inputgroup}>
            <TextField fullWidth label="From" style={{width: "20%", marginLeft: "1%" }} />
            <TextField fullWidth label="To" style={{width: "20%", marginLeft: "1%"}} />
            <DatePicker onChange={onChange} value={value} style={{  marginLeft: "1%" }} />
            <DatePicker onChange={onChange2} value={value2} style={{ marginLeft: "1%" }} />
            
            <TextField
              
              label="Traveller/Class"
              style={{ marginLeft: "1%", fontWeight: "800",width:"30%"  }}
            />
            <Stack spacing={2} direction="row" style={{ marginLeft: "1%" }}>
              <Button variant="contained" style={{ marginRight: "1%" }}>
                <SearchIcon />
                Search
              </Button>
            </Stack>
          </div>
        </div>
      </section>
      <div className={trcs.para}>Top Deal Of The Day</div>

      <div className={trcs.lastcard}>
        <Travel2
          link={
            "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg"
          }
          text1={"First Flight Offer!"}
          text2={"Get 15% Instant Off"}
          text3={"FLYNEW"}
        />
        <Travel2
          link={
            "https://www.architectandinteriorsindia.com/cloud/2021/11/15/01-6-scaled.jpg"
          }
          text1={"Waves Of Conivencence Fees"}
          text2={"When You Travel"}
          text3={"ZEROFEE"}
        />
        <Travel2
          link={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WGRSM3IXa41UDlIwF3hPTHVthzAGIFTUVw&usqp=CAU"
          }
          text1={"Demostic Flight Offers"}
          text2={"Up To 2,500 Off"}
          text3={"FKDOM"}
        />
        <Travel2
          link={
            "https://cdn.britannica.com/94/146394-050-1299F4B7/Shaft-light-canopy-rainforest-Malaysian.jpg"
          }
          text1={"Cheapest Prize"}
          text2={"Up To 15% Off"}
          text3={"FLYTODAY"}
        />
        <Travel2
          link={"https://gos3.ibcdn.com/india-kerala-149251808216o.jpeg"}
          text1={"InterNation Flights"}
          text2={"Up To 15% Off"}
          text3={"INT15"}
        />
        <Travel2
          link={
            "https://assets.philamuseum.org/public/2019-05/hero_1919-714.jpg"
          }
          text1={"Book A Round Trip For Your Crew"}
          text2={"And Save Up To 6,000"}
          text3={"FLYFAM"}
        />
      </div>
      <img
        className={trcs.last_img}
        src="https://www.thaiairways.com/static/common/imgscontent/offers_promotions/fare/airplanes.jpg"
        alt=""
      ></img>
      <Footer />
    </>
  );
};

export default Travel;
