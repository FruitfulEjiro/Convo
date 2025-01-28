import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/mediaQuery.css";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <App />
   </StrictMode>
);
