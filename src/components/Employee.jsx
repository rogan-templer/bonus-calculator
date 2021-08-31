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
            <option>{employee.name}</option>
          ))}
        </select>
      </form>
    </>
  );
}

export default Employee;
