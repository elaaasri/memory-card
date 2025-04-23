import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**
 * 1- scoreboard : ==> current score
 *                 ==> best score
 * 2- func that displays card in random order when one clicked.
 *  - be sure to invoke it when the component mounts!
 * 3- fetch an api : ==> displays images
 *                   ==> informational text
 */
