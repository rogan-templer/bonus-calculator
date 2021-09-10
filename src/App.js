import Header from "./components/Header";

import { GlobalProvider } from "./context/GlobalState";

import Employee from "./components/Employee";
import AddSales from "./components/AddSales";
import PercentResult from "./components/PercentResult";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Employee />
      <AddSales />
      <PercentResult />
    </GlobalProvider>
  );
}

export default App;
