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
        <Employee />
        <div className="grid grid-cols-3 gap-x-4 gap-y-4">
          <AddSales />
          <AddFreeCalls />
          <AddTotalCalls />
          <AddAppsConverted />
          <AddNps />
        </div>
        <div>
          <PercentResult />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
