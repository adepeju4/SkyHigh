import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { chartContainer } from "../Control/control.module.css";
import {labels, profit, profitColor, sales,salesColor} from './piechart.module.css'



function Piechart({ data, filterBy}) {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
       const newPayload = payload[0].payload;
      return (
        <div className="custom-tooltip" style={{ background: "#fff", padding: "10px"}}>
          <p className="intro">{`${filterBy}: ${newPayload[filterBy]}`}</p>
          <p className="label">{`${payload[0].dataKey} : $${payload[0].value}`}</p>
        </div>
      );
    }
      return null;
  }
  return (
    <div className={chartContainer}>
      <h3>PIE CHART</h3>
      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="Profit"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#000"
          />
          <Pie
            data={data}
            dataKey="Sales"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#A9A9A9"
            label
          />
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className={labels}>
        <p className={sales}>
          <div className={salesColor}></div>Sales
        </p>
        <div className={profit}>
          <p className={profitColor}></p>
          Profit
        </div>
      </div>
    </div>
  );
}

export default Piechart
