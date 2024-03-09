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
                copy="Fresh every single day.
                Cold pies, hot pies, pies for your hand, pies for your table. Hot-water crusts, luscious fillings. All the meats, vegan too.
                And don't forget the gluten-free brownies."
              />
            }
          />
          <Route
            path="/harkness-pies/values/"
            element={
              <People
                name="Toby"
                email="toby@insightinternet.co.uk"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            }
          />
          <Route
            path="/harkness-pies/about/"
            element={
              <Main
                header="[ABOUT]"
                title="About"
                copy="Hi, I'm Patrick Harkness. Trained as a butcher and worked in
                  Vancouver for 10 years, relocated to Edinburgh 2017.
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
    </>
  );
}

export default App;
