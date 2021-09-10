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
      <Header />
      <Employee />
      <AddSales />
      <AddTotalCalls />
      <AddFreeCalls />
      <AddAppsConverted />
      <AddNps />
      <PercentResult />
    </GlobalProvider>
  );
}

export default App;
