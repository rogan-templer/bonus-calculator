import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Employee() {
  const { employees } = useContext(GlobalContext);

  return (
    <>
      <form>
        <label>Choose an employee:</label>
        <select>
          {employees.map((employee) => (
            <option key={employee.id}>{employee.name}</option>
          ))}
        </select>
      </form>
      <h3>Add KPI Info</h3>
    </>
  );
}

export default Employee;
