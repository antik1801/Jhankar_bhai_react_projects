import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const TriangleBar = ({ props }) => {
  return (
    <div>
      const {(fill, x, y, width, height)} = props; return{" "}
      <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    </div>
  );
};

export default TriangleBar;
