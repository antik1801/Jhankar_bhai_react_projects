import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
const NestedChart = ({singleData}) => {
    const {physics, chemistry, biology} = singleData;
    return (
        <div>
            <BarChart width={1000} height={500} data={singleData}>
                <Bar dataKey={`${physics}`}></Bar>
            </BarChart>
        </div>
    );
};

export default NestedChart;