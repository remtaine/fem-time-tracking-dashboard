import React from "react";
import Activity from "./components/Activity";
import Profile from "./components/Profile";

function App() {
  return (
    <main className="App bg-fem-700 min-h-screen flex items-center justify-center selection:bg-fem-950 selection:text-fem-700 font-rubik text-neutral-50">
      <div className="grid grid-cols-4">
        <Profile />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
    </main>
  );
}

export default App;
