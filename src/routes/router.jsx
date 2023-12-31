import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { MenuPage } from "../pages/orderMenu";
import { CheckIn } from "../pages/checkIn";
import { CheckOut } from "../pages/checkout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CheckIn />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/payment" element={<CheckOut />} />
    </Routes>
  );
};
