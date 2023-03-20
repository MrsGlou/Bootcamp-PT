import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContexProvider } from "./context/userContext";

import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import News from "./pages/News";
import New from "./pages/New";
import Page404 from "./pages/Page404";
import Protected from "./components/Protected";

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
              paht="/news/:id"
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
