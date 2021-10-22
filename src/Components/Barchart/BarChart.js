import {chartContainer} from '../Control/control.module.css'
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



function Barchart({ data, filterBy,  min, max, id }) {

    return (
      <div className={chartContainer} id = {id}>
        <h3>BAR CHART</h3>
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            width={500}
            height={800}
            data={data}
            margin={{
              top: 5,
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
            <Bar dataKey="Sales" fill="#A9A9A9" />
            <Bar dataKey="Profit" fill="#000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Barchart;
