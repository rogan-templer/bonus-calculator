import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import Employee from "./Employee";

function KPIList() {
  const { kpis } = useContext(GlobalContext);

  return (
    <>
      <ul>
        {kpis.map((kpi) => (
          <h4>
            {kpi.type}: {kpi.target}
            <Employee />
          </h4>
        ))}
      </ul>
    </>
  );
}

export default KPIList;
