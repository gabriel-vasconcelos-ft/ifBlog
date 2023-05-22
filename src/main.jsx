import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Cadastro from "./pages/Cadastro";


import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
        <Route path="/" element={<Cadastro />}></Route>
         
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);