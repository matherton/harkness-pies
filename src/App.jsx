import "./App.css";

import People from "./components/People";
// import HockeyTeamList from "./components/HockyTeam";

function App() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 px-4 sm:px-0 lg:px-8">
        <h1 className="text-3xl text-center font-bold text-gray-900">
          harkness-pies
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <People />
          </div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
          <div>09</div>
        </div>
      </div>
    </>
  );
}

export default App;
