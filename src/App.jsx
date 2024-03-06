import "./App.css";

import Header from "./components/Header";
import People from "./components/People";
import HockeyTeamList from "./components/HockyTeam";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 px-4 sm:px-1 lg:px-8">
        <Header />
        <div className="grid grid-cols-2 gap-4 pt-10 pl-10 pr-10">
          <div>
            <People />
          </div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>
            <HockeyTeamList />
          </div>
          <div>09</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
