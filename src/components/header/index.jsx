import React from "react";
import * as C from "./styled";
import { MdFastfood } from "react-icons/md";

export const Header = () => {
  return (
    <C.Header className="header">
      <h1>Santos's Bar</h1>
      <div className="icon">
        <MdFastfood />
      </div>
    </C.Header>
  );
};
