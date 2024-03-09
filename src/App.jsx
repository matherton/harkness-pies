<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Harkness Pies</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import HockeyTeamList from "./components/HockyTeam";
import People from "./components/People";
import Main from "./components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/harkness-pies/" element={<Home />} />
          <Route
            path="/harkness-pies/products/"
            element={
              <Main
                header="[PRODUCTS]"
                title="Everything made on the premises."
                copy="Fresh every single day."
                copy2="Cold pies, hot pies, pies for your hand, pies for your table. Hot-water crusts, luscious fillings. All the meats, vegan too.
                And don't forget the gluten-free brownies."
              />
            }
          />
          <Route
            path="/harkness-pies/values/"
            element={
              <Main
                reverse
                header="[VALUES]"
                title="Values matter."
                copy="Because the right values make things taste better."
                copy2="We support local farmers and artisan suppliers – minimising food miles, keeping things fresh.
                Organic beef and lamb from The Free Company in Balerno. Outdoor-reared pork from Dalkeith. Organic chicken from down the road in Biggar."
              />
            }
          />
          <Route
            path="/harkness-pies/about/"
            element={
              <Main
                header="[ABOUT]"
                title="Hi, I'm Patrick Harkness."
                copy="Trained as a butcher and worked in
                  Vancouver for 10 years, relocated to Edinburgh 2017."
                copy2="
                  Everything we do at Harkness starts with the highest quality
                  produce, no skimping, no artificial gunk. That's what we
                  believe in. Next time you're passing, pop in the shop and say
                  hi."
              />
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
>>>>>>> tailwind
    </>
  );
}

export default App;
