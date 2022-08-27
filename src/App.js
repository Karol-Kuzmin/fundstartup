import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FundPage from "./pages/Fund/FundPage";
import StakingPage from "./pages/Staking/StakingPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fund" element={<FundPage />} />
          <Route path="/staking" element={<StakingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
