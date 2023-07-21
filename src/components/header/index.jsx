import * as C from "./styled";
import { MdFastfood } from "react-icons/md";
import homeLogo from "../../assets/home.svg";
import pedidosLogo from "../../assets/orders.svg";
import pagamentoLogo from "../../assets/payment.svg";
import statusLogo from "../../assets/status.svg";

import React, { useState, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { useNavigate } from "react-router-dom";

import { OrderModal } from "../modals/checkOrder";
import { StatusModal } from "../modals/orderStatus";

export const Header = () => {
  const { state } = useContext(MainContext);
  const navigate = useNavigate();
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenStatus, setIsOpenStatus] = useState(false);

  return (
    <C.Header>
      <StatusModal isOpen={isOpenStatus} setIsOpen={setIsOpenStatus} />
      <OrderModal isOpen={isOpenCart} setIsOpen={setIsOpenCart} />
      <div className="logo" onClick={() => console.log(state)}>
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
        <C.HomeBtn
          reference={"cart"}
          isEnabled={state.cart.products.length}
          onClick={() => {
            if (state.cart.products.length) setIsOpenCart(true);
          }}
        >
          <img src={pedidosLogo} />
        </C.HomeBtn>
        <C.HomeBtn onClick={() => setIsOpenStatus(true)}>
          <img src={statusLogo} />
        </C.HomeBtn>
        <C.HomeBtn
          onClick={() => {
            alert(
              "Para realizar o pagamento com dinheiro físico ou cartão de crédito/débido, se direcione até o caixa."
            );
            navigate("/payment");
          }}
        >
          <img src={pagamentoLogo} />
        </C.HomeBtn>
      </div>
    </C.Header>
  );
};
