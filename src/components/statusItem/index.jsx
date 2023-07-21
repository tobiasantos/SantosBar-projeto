import * as C from "./styled";

import { useState, useEffect, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

export const StatusItem = ({ name, img, type, id }) => {
  const { state, dispatch } = useContext(MainContext);

  const waitTime =
    type === "pratos" ? 15000 : type === "petiscos" ? 10000 : 6000;

    const aguardando = "Aguardando confirmação da cozinha...";
    const preparando =  "Preparando pedido...";
    const pronto =  "Pedido pronto para retirada!";

  const kitchenCheck = () => {
    setTimeout(() => {
      dispatch({
        type: "UPDATE_STATUS_PRODUCTION",
        payload: { id, status: "Preparando pedido..." },
      });
    }, 3000);
  };

  const readyCheck = () => {
    setTimeout(() => {
      dispatch({
        type: "UPDATE_STATUS_PRODUCTION",
        payload: { id, status: "Pedido pronto para retirada!" },
      });
    }, waitTime);
  };

  const getElementById = (id) => {
    return state.production.productsProduction.find((item) => item.id === id);
  };

  useEffect(() => {
    if (getElementById(id).status === "Aguardando confirmação da cozinha...") {
      kitchenCheck();
    } else if (getElementById(id).status === "Preparando pedido...") {
      readyCheck();
    }
  }, [getElementById(id).status]);

  return (
    <C.StatusWrapper>
      <C.Img src={img} />
      <C.Name>{name }{"    "} </C.Name>
    <div className={getElementById(id).status === aguardando ? "waiting" : getElementById(id).status === preparando ? "prep": getElementById(id).status === pronto ? "done":" x"} > { getElementById(id).status} </div>
    </C.StatusWrapper>
  );
};
