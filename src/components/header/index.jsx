import React from "react";
import * as C from "./styled";
import { MdFastfood } from "react-icons/md";
import homeLogo from "../../assets/home.svg";
import pedidosLogo from "../../assets/orders.svg";
import pagamentoLogo from "../../assets/payment.svg";

import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { state } = useContext(MainContext);
  const navigate = useNavigate();

  return (
    <C.Header>
      <div className="logo">
        <h1>Santos's Bar</h1>
        <div className="icon">
          <MdFastfood />
        </div>
      </div>
      <div className="btns">
        <C.HomeBtn
          onClick={() => {
            return navigate("/home");
          }}
        >
          <img src={homeLogo} />
        </C.HomeBtn>
        <C.PedidosBtn>
          <img src={pedidosLogo} />
        </C.PedidosBtn>
        <C.PagamentoBtn onClick={() => console.log(state)}>
          <img src={pagamentoLogo} />
        </C.PagamentoBtn>
      </div>
    </C.Header>
  );
};
