import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContexProvider } from "./context/userContext";

import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import News from "./pages/News";
import Photovoltaic from "./pages/Photovoltaic";
import Page404 from "./pages/Page404";
import Protected from "./components/Protected";
import New from "./pages/New";
import Film from "./pages/Film";
import Tecnology from "./pages/Tecnology";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ContexProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/news"
              element={
                <Protected>
                  <News />
                </Protected>
              }
            />
            <Route
              path="/fotovoltaica"
              element={
                <Protected>
                  <Photovoltaic />
                </Protected>
              }
            />
            <Route
              path="/cine"
              element={
                <Protected>
                  <Film />
                </Protected>
              }
            />
            <Route
              path="/tecnologia"
              element={
                <Protected>
                  <Tecnology />
                </Protected>
              }
            />
            <Route
              path="/news/:id"
              element={
                <Protected>
                  <New />
                </Protected>
              }
            />
            <Route path="/*" element={<Page404 />} />
          </Route>
        </Routes>
      </ContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
