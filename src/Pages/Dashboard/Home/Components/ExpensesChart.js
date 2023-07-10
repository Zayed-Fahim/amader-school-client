import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ExpensesChart = () => {
  const data = [
    {
      name: "Page A",
      Jan: 4000,
      amt: 2400,
    },
    {
      name: "Page B",
      Feb: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      Mar: 2000,
      amt: 2290,
    },
  ];
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 32,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Jan" stackId="a" fill="#40DFCD" />
          <Bar dataKey="Feb" stackId="a" fill="#1F66FF" />
          <Bar dataKey="Mar" stackId="a" fill="#FFAA01" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensesChart;
