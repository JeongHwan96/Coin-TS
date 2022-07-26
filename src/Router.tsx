import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

interface IRouterProps {}

const Router = ({}: IRouterProps) => {
  return (
    <BrowserRouter basename="Coin-TS">
      <Routes>
        <Route path="/:coinId/" element={<Coin />}>
          <Route path={`price`} element={<Price />}></Route>
          <Route path={`chart`} element={<Chart coinId={""} />}></Route>
        </Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
