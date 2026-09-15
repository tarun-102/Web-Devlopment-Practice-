import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import UserProvider from "./assets/context/UserProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>

    <UserProvider>
      <App />
      <ToastContainer />
    </UserProvider>
  </StrictMode>,
);
