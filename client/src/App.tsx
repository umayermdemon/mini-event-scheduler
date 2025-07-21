import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [view, setView] = useState("add-event");
  return (
    <div className="bg-white mx-auto my-4 rounded-xl shadow-lg w-full max-w-7xl min-h-[calc(100vh-50px)] flex flex-col">
      <Navbar onNavToggle={setView} activeView={view} />
      <Home view={view} />
    </div>
  );
}

export default App;
