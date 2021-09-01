import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import Employee from "./Employee";

function KPIList() {
  const { kpis } = useContext(GlobalContext);

  return (
    <>
      <ul>
        {kpis.map((kpi) => (
          <div key={kpi.id}>
            <p>{kpi.text}</p>
            <p>Target: {kpi.target}</p>
            <p>Actual Achieved: {kpi.actual}</p>
          </div>
        ))}
      </ul>
    </>
  );
}

export default KPIList;
