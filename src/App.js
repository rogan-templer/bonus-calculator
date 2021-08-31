import Header from "./components/Header";
import TargetResult from "./components/TargetResult";
import KPIList from "./components/KPIList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <KPIList />
      <TargetResult />
    </GlobalProvider>
  );
}

export default App;
