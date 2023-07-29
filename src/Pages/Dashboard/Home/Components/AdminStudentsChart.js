import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const AdminStudentsChart = () => {
  const { admin } = useContext(AuthContext);

  // Filter male and female students separately
  const maleStudents = admin?.students?.filter(
    (student) => student.gender === "Male"
  );
  const femaleStudents = admin?.students?.filter(
    (student) => student.gender === "Female"
  );

  const data = [
    { name: "Male Students", value: maleStudents?.length || 0 },
    { name: "Female Students", value: femaleStudents?.length || 0 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="h-[430px]  w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            innerRadius={90}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminStudentsChart;
