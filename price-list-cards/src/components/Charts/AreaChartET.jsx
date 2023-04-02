import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const AreaChartET = () => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch('areachart.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        <div>
            <AreaChart width={1000} height={500} data={datas}  margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="physics" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </div>
    );
};

export default AreaChartET;