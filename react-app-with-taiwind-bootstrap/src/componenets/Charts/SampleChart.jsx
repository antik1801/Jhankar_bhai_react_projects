import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianAxis } from "recharts";

const SampleChart = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2500, amt: 1100 },
    { name: "Page B", uv: 500, pv: 2700, amt: 1500 },
    { name: "Page C", uv: 380, pv: 2300, amt: 1200 },
    { name: "Page D", uv: 700, pv: 1800, amt: 900 },
    { name: "Page E", uv: 430, pv: 2200, amt: 750 },
    { name: "Page F", uv: 520, pv: 2100, amt: 1300 },
  ];
  return (
    <div>
      <LineChart width={400} height={400} data={data}>
        <XAxis ></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <CartesianAxis></CartesianAxis>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="amt" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default SampleChart;
