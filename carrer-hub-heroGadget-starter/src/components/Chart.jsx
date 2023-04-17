
import React, { PureComponent } from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
  const data = [
    {
      name: 'Assignment 1',
      assignmentMarks: 49,
      AssignmentParcentage: 95,
      RangeAssignment: 95,
    },
    {
      name: 'Assignment 2',
      assignmentMarks: 56,
      AssignmentParcentage: 84,
      RangeAssignment: 84,
    },
    {
      name: 'Assignment 3',
      assignmentMarks: 60,
      AssignmentParcentage: 75,
      RangeAssignment: 75,
    },
    {
      name: 'Assignment 4',
      assignmentMarks: 60,
      AssignmentParcentage: 56,
      RangeAssignment: 56,
    },
    {
      name: 'Assignment 5',
      assignmentMarks: 60,
      AssignmentParcentage: 82,
      RangeAssignment: 82,
    },
    {
      name: 'Assignment 6',
      assignmentMarks: 58,
      AssignmentParcentage: 70,
      RangeAssignment: 70,
    },
    {
      name: 'Assignment 7',
      assignmentMarks: 60,
      AssignmentParcentage: 75,
      RangeAssignment: 75,
    },
    {
      name: 'Assignment 8',
      assignmentMarks: 60,
      AssignmentParcentage: 97,
      RangeAssignment: 97,
    },
  ];
const Chart = () => {

    return (
         <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="RangeAssignment" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="AssignmentParcentage" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="assignmentMarks" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Chart;