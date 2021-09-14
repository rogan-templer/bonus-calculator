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
    <div className="md: container md:mx-auto">
      <GlobalProvider>
        <Header />
        <Employee />
        <div className="grid grid-cols-12 gap-3">
          <AddSales />
          <AddTotalCalls />
          <AddFreeCalls />
          <AddAppsConverted />
          <AddNps />
        </div>
        <PercentResult />
      </GlobalProvider>
    </div>
  );
}

export default App;
