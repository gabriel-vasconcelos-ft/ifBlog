import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Cadastro from "./pages/Cadastro";
//import Login from "./pages/Login";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
     <Route path="/" element={<Cadastro />}></Route>
      {/* <Route path="/" element={<Login />}></Route>*/}

        <Route element={<App />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
