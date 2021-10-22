import React from "react";
import { chartContainer } from "../Control/control.module.css";
import {
  BarChart,
  Bar,
  ReferenceLine,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ComponentBarChart({ data, filterBy, min, max }) {
  return (
    <div className={chartContainer}>
      <h3>Component Bar Chart</h3>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={filterBy} fontSize={12} />
          <YAxis type="number" domain={[min, max]} fontSize={12} />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey={filterBy} height={30} stroke="#000" />
          <Bar dataKey="Sales" fill="#A9A9A9" stackId="a" />
          <Bar dataKey="Profit" fill="#000" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ComponentBarChart;
