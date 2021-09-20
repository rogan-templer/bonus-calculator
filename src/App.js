import Header from "./components/Header";

import { GlobalProvider } from "./context/GlobalState";

import Employee from "./components/Employee";
import AddSales from "./components/AddSales";
import PercentResult from "./components/PercentResult";
import AddFreeCalls from "./components/AddFreeCalls";
import AddAppsConverted from "./components/AddAppsConverted";
import AddNps from "./components/AddNps";
import AddTotalCalls from "./components/AddTotalCalls";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <div className="flex justify-center m-4">
          <Employee />
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-4">
          <AddSales />
          <AddTotalCalls />
          <AddFreeCalls />
          <AddAppsConverted />
          <AddNps />
        </div>
        <div className="">
          <h4 className="flex justify-center m-4">Outcomes</h4>
          <PercentResult />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
