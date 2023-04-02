import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const PhoneBar = () => {
  const [phones, setPhones] = useState([]);
  // console.log('From phonebar components')
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log(data))

    // Axios get https: //
    const dataLoad = () => {
      try {
        axios
          .get("https://openapi.programming-hero.com/api/phones?search=iphone")
          .then((data) => {
            const loadData = data.data.data;
            const phonesData = loadData.map((phone) => {
              const parts = parseInt(phone.slug.split("-")[1]);
              const phoneInfo = {
                name: phone.phone_name,
                price: parts,
              };
              return phoneInfo;
            });
            setPhones(phonesData);
          });
      } catch (error) {
        console.log(error);
      }
    };
    dataLoad();
  }, []);
  console.log(phones);

  return (
    <div >
      <BarChart width={1000} height={500} data={phones}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="price" fill="#8884d8"></Bar>
      </BarChart>
    </div>
  );
};

export default PhoneBar;
