import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import {
  labels,
  profit,
  profitColor,
  sales,
  salesColor,
} from "../PieChart/piechart.module.css";
import { chartContainer } from "../Control/control.module.css";

function TimeSeries({ data, filterBy, min, max }) {
    return (
      <div className={chartContainer}>
        <h3>Time Series</h3>
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={filterBy} fontSize={12} />
            <YAxis type="number" domain={[min, max]} fontSize={12} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Sales"
              stroke="#A9A9A9"
              fill="#A9A9A9"
            />
            <Brush />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" aspect={2}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={filterBy} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Profit" stroke="#000" fill="#000" />
          </AreaChart>
        </ResponsiveContainer>
        <div className={labels}>
          <p className={sales}>
            <div className={salesColor}></div>Sales
          </p>
          <p className={profit}>
            <div className={profitColor}></div>
            Profit
          </p>
        </div>
      </div>
    );
}

export default TimeSeries
