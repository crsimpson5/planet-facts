import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path=":planetName" element={<App />} />
        <Route path="*" element={<Navigate replace to="/earth" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
