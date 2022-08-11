import React from "react";
import ActivityDashboard from "./components/ActivityDashboard";
import Profile from "./components/Profile";

function App() {
  return (
    <main className="App bg-fem-700 min-h-screen flex items-center justify-center selection:bg-neutral-200 selection:text-neutral-900 font-rubik text-neutral-50">
      <div className="flex gap-6">
        <Profile />
        <ActivityDashboard />
      </div>
    </main>
  );
}

export default App;
