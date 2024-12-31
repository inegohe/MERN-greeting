import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalProvider";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/:name" element={<App />} />
    </Routes>
  </BrowserRouter>
  </GlobalProvider>
);
