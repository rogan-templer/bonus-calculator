import Header from "./components/Header";

import KPIList from "./components/KPIList";

import { GlobalProvider } from "./context/GlobalState";

import Employee from "./components/Employee";
import AddSales from "./components/AddSales";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <Employee />
      <AddSales />
      
    </GlobalProvider>
  );
}

export default App;
