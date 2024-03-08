import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import HockeyTeamList from "./components/HockyTeam";
import People from "./components/People";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/harkness-pies/" element={<Home />} />

          <Route path="/harkness-pies/products/" element={<HockeyTeamList />} />
          <Route path="/harkness-pies/value/" element={<People />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
