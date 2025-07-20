import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [view, setView] = useState("add-event");
  return (
    <div className="bg-white m-8 rounded-xl">
      <Navbar onNavToggle={setView} />
      <Home view={view} />
    </div>
  );
}

export default App;
