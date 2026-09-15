import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>
);