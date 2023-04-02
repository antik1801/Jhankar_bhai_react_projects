import React, { useEffect, useState } from "react";
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
import AreaChartET from "../Charts/AreaChartET";
import Barchart from "../Charts/Barchart";
const Dashboard = () => {
  const marksArray = [
    { id: 1, student: "Alice", physics: 85, chemistry: 92, biology: 78 },
    { id: 2, student: "Bob", physics: 76, chemistry: 88, biology: 80 },
    { id: 3, student: "Charlie", physics: 90, chemistry: 83, biology: 85 },
    { id: 4, student: "David", physics: 82, chemistry: 90, biology: 75 },
    { id: 5, student: "Emma", physics: 88, chemistry: 91, biology: 86 },
    { id: 6, student: "Frank", physics: 75, chemistry: 85, biology: 82 },
    { id: 7, student: "Grace", physics: 89, chemistry: 79, biology: 88 },
    { id: 8, student: "Harry", physics: 81, chemistry: 87, biology: 90 },
    { id: 9, student: "Isabelle", physics: 94, chemistry: 92, biology: 87 },
    { id: 10, student: "Jack", physics: 77, chemistry: 86, biology: 78 },
    { id: 11, student: "Katie", physics: 83, chemistry: 84, biology: 89 },
    { id: 12, student: "Lucas", physics: 92, chemistry: 88, biology: 81 },
  ];
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("demo.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="mt-10">
      <LineChart
        width={1000}
        height={300}
        data={marksArray}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="physics" stroke="#82ca9d"></Line>
        <Line type="monotone" dataKey="biology" stroke="#8884d8"></Line>
      </LineChart>
        <AreaChartET></AreaChartET>
        <Barchart data={datas}></Barchart>
    </div>
  );
};

export default Dashboard;
