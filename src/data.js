import React from "react";
import { InsightsProvider } from "./Context/GraphDataContext";
import ChartControl from "./Components/Control/ChartControl";

function Data() {

  return (
      <InsightsProvider>
          <ChartControl></ChartControl>
      </InsightsProvider>
  );
}

export default Data;
