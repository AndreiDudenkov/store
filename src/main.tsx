import { StrictMode } from "react";

import App from "@/App";
import { createRoot } from "react-dom/client";

import "./styles/index.scss";
import "@/styles/fonts/gothamFont/gotham-font.css";
import "@/styles/fonts/gothamProFont/stylesheet.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
