import React from "react";
import * as C from "./styled";
import { MdFastfood } from "react-icons/md";
import homeLogo from "../../assets/home.svg";
import pedidosLogo from "../../assets/orders.svg";
import pagamentoLogo from "../../assets/payment.svg";

export const Header = () => {
  return (
    <C.Header>
      <div className="logo">
        <h1>Santos's Bar</h1>
        <div className="icon">
          <MdFastfood />
        </div>
      </div>
      <div className="btns">
        <C.HomeBtn>
          <img src={homeLogo} />
        </C.HomeBtn>
        <C.PedidosBtn>
          <img src={pedidosLogo} />
        </C.PedidosBtn>
        <C.PagamentoBtn>
          <img src={pagamentoLogo} />
        </C.PagamentoBtn>
      </div>
    </C.Header>
  );
};
