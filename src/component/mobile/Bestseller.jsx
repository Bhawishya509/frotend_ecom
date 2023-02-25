import React, { useState, useEffect } from "react";
import axios from "axios";
//Electronicpr4
import mbcs from "./Mobile.module.css"
const Bestseller = () => {
  const [datas, setdatas] = useState();
  useEffect(() => {
    const getdata = async () => {
      const response1 = await axios.get("https://mern-stacks-p1by.onrender.com/Electronicpr4");
      setdatas([response1.data]);
    };
    getdata();
  }, []);

  if (datas)
  {

    return (
      <>
        {datas[0].map((data, keys) => {
          return(<img className={mbcs.images} src={data} alt="" key={keys} />);
        })}
      </>
    );
  }
};

export default Bestseller;
