import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import Employee from "./Employee";

function KPIList() {
  const { kpis, employees } = useContext(GlobalContext);

  return (
    <>
      <Employee />
      <ul>
        {kpis.map((kpi) => (
          <form key={kpi.id}>
            {kpi.type}: {kpi.target}
            <br />
            <label>Achieved:</label>
            <input type="text" />
          </form>
        ))}
      </ul>
    </>
  );
}

export default KPIList;
