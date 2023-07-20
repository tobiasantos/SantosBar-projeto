import * as C from "./styled";
import React, { useEffect, useState, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

import { useNavigate } from "react-router-dom";

import { MdFastfood } from "react-icons/md";
import { Header } from "../../components/header";
import checkInBgMobile from "../../assets/checkin-bg.png";
import checkInBg from "../../assets/checkin-bg.jpg";

export const CheckIn = () => {
  const navigate = useNavigate();

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <C.CheckInWrapper bg={checkInBg} bgMobile={checkInBgMobile}>
      {/* <Header /> */}
      <C.Container>
        <C.Content>
          <div className="icon">
            <MdFastfood />
            <h1>Santos's Bar</h1>
          </div>
          <h3 className="greetings">Bem vindo(a) ao Santos's Bar!</h3>
          <div className="table-info">Sua mesa é a {randomNumber(1, 20)}</div>
          <button onClick={() => navigate("/home")}>Ver cardápio</button>
        </C.Content>
      </C.Container>
    </C.CheckInWrapper>
  );
};
