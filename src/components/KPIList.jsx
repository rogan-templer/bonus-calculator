import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import Employee from "./Employee";

function KPIList() {
  const { kpis } = useContext(GlobalContext);

  return (
    <>
      <Employee />
      <ul>
        {kpis.map((kpi) => (
          <form key={kpi.id}>
            {kpi.type}: {kpi.target}
            <br />
            <label>Achieved:</label>
            <input type="number" />
          </form>
        ))}
      </ul>
    </>
  );
}

export default KPIList;
