import Data from "./components/Data";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Sidebar />
        <Data />
      </div>
    </>
  );
}

export default App;
