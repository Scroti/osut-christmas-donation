import "../src/index.css";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";

import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
