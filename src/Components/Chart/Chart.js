import React, { useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const [phone, setPhone] = useState([]);
  axios
    .get("https://openapi.programming-hero.com/api/phones?search=p")
    .then((res) => {
      const phone = res.data.data;
      let refignData = phone.map((data) => {
        const price = data.slug.split("-");
        const mainPrice = price[1];
        const singlePhone = {
          name: data.phone_name,
          price: mainPrice,
        };
        return singlePhone;
      });
      setPhone(refignData);
    });

  return (
    <div>
      <LineChart width={500} height={500} data={phone}>
        <XAxis dataKey="price" />
        <YAxis dataKey="price"/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;
