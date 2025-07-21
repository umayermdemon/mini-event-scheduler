import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-[#DCE6EF] min-h-screen border-4 border-[#DCE6EF]">
      <App />
      <Toaster richColors={true} position="top-right" />
    </div>
  </StrictMode>
);
