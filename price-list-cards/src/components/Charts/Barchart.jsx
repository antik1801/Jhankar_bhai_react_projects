import React from "react";
import NestedChart from "../NetstedChart/NestedChart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
const Barchart = ({ data }) => {
  const { physics, chemistry, biology } = data;
  return (
    <div>
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey={`${physics}`} fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Barchart;
