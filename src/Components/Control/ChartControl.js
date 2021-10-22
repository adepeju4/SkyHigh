import React, { useContext, useState } from "react";
import { InsightContext } from "../../Context/GraphDataContext";
import LoadButtons from "../LoadButtons/LoadButtons";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import Load from "../Hero/Hero.js";
import Barchart from "../Barchart/BarChart";
import Piechart from "../PieChart/Piechart";
import ComponentBarChart from "../ComponentBarChat.js/ComponentBarChart";
import TimeSeries from "../Time Series/TimeSeries";
import Table from "../Table/Table";


function ChartControl() {
  const { insight, error, isPending } = useContext(InsightContext);
  const [range, setrange] = useState(1);
  const [filterBy, setFilterBy] = useState("Order Date");

  const limit = 50;
  let min;
  let max;
  let data;

  if (insight && filterBy) {
    let result = [];
    const groupBy = (data, property) => {
      return data.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    };

    const grouped = groupBy(insight, filterBy);
    

    for (const [key, value] of Object.entries(grouped)) {
      let sumProfit = 0;
      let sumSales = 0;
      value.forEach((val) => {
        sumProfit = parseInt(sumProfit) + parseInt(val.Profit);
        sumSales = parseInt(sumSales) + parseInt(val.Sales);
      });
      if (filterBy === 'Order Date') {
        const setDateStr = new Date(key).toDateString().split(" ");
        const dateStr = `${setDateStr[2]} ${setDateStr[1]} ${setDateStr[3]}`;
        const outputData = {};
        outputData[filterBy] = dateStr;
        outputData["Profit"] = sumProfit;
        outputData["Sales"] = sumSales;
        result.push(outputData);
        result.sort((a, b) => {
          const c = new Date(a[filterBy]);
          const d = new Date(b[filterBy]);
          return c-d
        })
      } else {
          const outputData = {};
      outputData[filterBy] = key;
      outputData["Profit"] = sumProfit;
      outputData["Sales"] = sumSales;
        result.push(outputData);
          result.sort((a, b) => {
            const c = a[filterBy].toLowerCase();
            const d = b[filterBy].toLowerCase();
            return c - d;
          });
      }
    
    }

    if (range && limit && range > 0) {
      const newPage = range * 1 || 1;
      const perPage = limit * 1 || 200;
      const start = (newPage - 1) * perPage;
      const end = newPage * perPage;
      result.sort((a,b)=>a-b)
      data = result.slice(start, end);
      const getProfit = data.map((el) => Number(el.Profit));
      const getSale = data.map((el) => Number(el.Sales));
      const maxSale = Math.max(...getSale);
      const minSale = Math.min(...getSale);
      const minProfit = Math.min(...getProfit);
      const maxProfit = Math.max(...getProfit);
      if (minSale < minProfit) {
        min = minSale;
      } else {
        min = minProfit;
      }
      if (maxSale > maxProfit) {
        
        max = maxSale;
      } else {
        max = maxProfit;
      }
    }
  }

  const handleNext = (e) => {
    e.preventDefault();
    const count = range + 1;
      setrange(count);
  };

  if (insight && data.length <= 0) {
    setrange(1)
  }

  const handlePrev = (e) => {
    e.preventDefault();
    const reduce = range - 1;
 
    if (reduce > 0) {
      setrange(reduce);
    }
  };

  return (
    <div>
      {error && { error }}
      {isPending && <Load />}
      {insight && (
        <div>
          <div style={{textAlign: 'center'}}>
            <h3>SkyHigh Retails</h3>
            <h4>Sales Insights and Charts</h4>
            <p>Due to large amount of data and for easy visualisation, we are returning the data with the limit of 50. Click the next or previous buttons to load the next fifty or the previous.</p>
            <p>You can also filter by categories on the right bottom of your screen</p>
          </div>

          <Barchart
            data={data}
            filterBy={filterBy}
            min={min}
            max={max}
            handleNext={handleNext}
            handlePrev={handlePrev}
            range={range}
            setFilterBy={setFilterBy}
            id="allcharts"
          />
          <Piechart
            data={data}
            filterBy={filterBy}
            min={min}
            max={max}
            handleNext={handleNext}
            handlePrev={handlePrev}
            range={range}
            setFilterBy={setFilterBy}
          />
          <ComponentBarChart
            data={data}
            filterBy={filterBy}
            min={min}
            max={max}
            handleNext={handleNext}
            handlePrev={handlePrev}
            range={range}
            setFilterBy={setFilterBy}
          />
          <TimeSeries
            data={data}
            filterBy={filterBy}
            min={min}
            max={max}
            handleNext={handleNext}
            handlePrev={handlePrev}
            range={range}
            setFilterBy={setFilterBy}
          />
          <Table
            data={data}
            filterBy={filterBy}
            min={min}
            max={max}
            handleNext={handleNext}
            handlePrev={handlePrev}
            range={range}
            setFilterBy={setFilterBy}
          />
          <GlobalSelect filter={filterBy} setFilter={setFilterBy} />
          <LoadButtons
            handleNext={handleNext}
            handlePrev={handlePrev}
            count={range}
          />
        </div>
      )}
    </div>
  );
}

export default ChartControl;
