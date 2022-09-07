import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FundPage from "./pages/Fund/FundPage";
import StakingPage from "./pages/Staking/StakingPage";
import NFTLaunchpad from "./pages/nftlaunchpad/NFTLaunchpad";
import ClaimPage from "./pages/claim/Claimpage";
import FnftsPage from "./pages/fnfts/FnftsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fund" element={<FundPage />} />
          <Route path="/staking" element={<StakingPage/>}/>
          <Route path="/nft_launchpad" element={<NFTLaunchpad/>}/>
          <Route path="/claim" element={<ClaimPage/>}/>
          <Route path="/fnfts" element={<FnftsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
