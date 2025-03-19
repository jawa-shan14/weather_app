import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";  // ✅ Keep only this import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
