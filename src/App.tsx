import React from "react";
import ActivityDashboard from "./components/ActivityDashboard";
import Profile from "./components/Profile";

function App(prop: any) {
  // const [active, setActive] = useState("Weekly");
  const { timePeriod } = prop;
  const changeActive = function () {};
  return (
    <main className="App bg-fem-700 min-h-screen flex  items-center justify-center selection:bg-neutral-200 selection:text-neutral-900 font-rubik text-neutral-50 py-4">
      <div className="flex gap-6 flex-col xl:flex-row">
        <Profile />
        <ActivityDashboard />
      </div>
    </main>
  );
}

export default App;
