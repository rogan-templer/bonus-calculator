import Header from "./components/Header";
import TargetResult from "./components/TargetResult";
import KPIList from "./components/KPIList";

import { GlobalProvider } from "./context/GlobalState";

import Employee from "./components/Employee";
import AddSales from "./components/AddSales";
import AddFreeCalls from "./components/AddFreeCalls";
import AddTotalCalls from "./components/AddTotalCalls";
import AddNps from "./components/AddNps";
import AddAppsConverted from "./components/AppsConverted";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Employee />
      <AddSales />
      <AddFreeCalls />
      <AddTotalCalls />
      <AddNps />
      <AddAppsConverted />
    </GlobalProvider>
  );
}

export default App;
