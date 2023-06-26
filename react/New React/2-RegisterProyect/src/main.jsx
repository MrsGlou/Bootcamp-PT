import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import ValidationCode from "./pages/ValidationCode.jsx";
import Login from "./pages/Login";

import Protected from "./components/Protected.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/validationcode" element={<ValidationCode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
