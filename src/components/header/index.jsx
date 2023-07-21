import * as C from "./styled";
import { MdFastfood } from "react-icons/md";
import homeLogo from "../../assets/home.svg";
import pedidosLogo from "../../assets/orders.svg";
import pagamentoLogo from "../../assets/payment.svg";

import React, { useState, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { useNavigate } from "react-router-dom";

import { OrderModal } from "../modals/checkOrder";

export const Header = () => {
  const { state } = useContext(MainContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <C.Header>
      <OrderModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
        <C.PedidosBtn onClick={() => setIsOpen(true)}>
          <img src={pedidosLogo} />
        </C.PedidosBtn>
        <C.PagamentoBtn onClick={() => console.log(state)}>
          <img src={pagamentoLogo} />
        </C.PagamentoBtn>
      </div>
    </C.Header>
  );
};
