import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom"; // ✅ important
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <BrowserRouter> {/* ✅ ici */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
