import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const AttendanceChart = () => {
  const { student } = useContext(AuthContext);

  // Filter male and female students separately
  const present = student?.attendances?.filter(
    (attendance) => attendance.attendanceStatus === true
  );
  const absent = student?.attendances?.filter(
    (attendance) => attendance.attendanceStatus === false
  );

  const data = [
    { name: "Present", value: present?.length || 0 },
    { name: "Absent", value: absent?.length || 0 },
  ];

  const COLORS = ["#00C49F", "#0088FE"];
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
    <div className="h-[300px] w-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={110}
            innerRadius={70}
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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
