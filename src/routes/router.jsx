import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
