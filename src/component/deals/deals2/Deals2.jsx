import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import Crusal2 from "../../home/crusal2/Crusal2";
import axios from "axios";
const Deals2 = (props) => {
  const [product1, setProduct1] = useState();
  const [product2, setProduct2] = useState();

  useEffect(() => {
    const fun = async () => {
      const response1 = await axios.get("http://localhost:8000/firstProduct");
      const response2 = await axios.get("http://localhost:8000/secondProduct");

      setProduct1([response1.data]);
      setProduct2([response2.data]);

    };

    fun();
  }, []);
  return (
    <>
    {product1 ?<Crusal2 arr={product1}/>:" "}
    {product2 ?<Crusal2 arr={product2}/>:" "}
      <Footer />
    </>
  );
};

export default Deals2;
