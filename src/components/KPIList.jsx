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
          <h4 key={kpi.id}>
            {kpi.type}: {kpi.target}
          </h4>
        ))}
      </ul>
    </>
  );
}

export default KPIList;
