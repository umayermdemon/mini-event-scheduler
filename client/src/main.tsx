import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-[#DCE6EF] min-h-screen border-4 border-[#DCE6EF]">
      <App />
    </div>
  </StrictMode>
);
