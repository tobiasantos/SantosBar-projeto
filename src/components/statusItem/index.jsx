import { useState, useEffect, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

export const StatusItem = ({ name, img, type, id }) => {
  const { state, dispatch } = useContext(MainContext);
  const [status, setStatus] = useState("Aguardando confirmação da cozinha...");

  const waitTime =
    type === "pratos" ? 15000 : type === "petiscos" ? 10000 : 6000;

  const statusColor = {
    "Aguardando confirmação da cozinha...": "#706e6e",
    "Preparando pedido...": "#FFC700",
    "Pedido pronto para retirada!": "#00FF00",
  };

  const kitchenCheck = () => {
    setTimeout(() => {
      setStatus("Preparando pedido...");
    }, 3000);
  };

  const readyCheck = () => {
    setTimeout(() => {
      setStatus("Pedido pronto para retirada!");
    }, waitTime);
  };

  useEffect(() => {
    if (status === "Aguardando confirmação da cozinha...") {
      kitchenCheck();
    } else if (status === "Preparando pedido...") {
      readyCheck();
    }
  }, [status]);

  return (
    <C.StatusWrapper>
      <C.Img src={img} />
      <C.Name>{name}</C.Name>
      <C.StatusMsg>{status}</C.StatusMsg>
    </C.StatusWrapper>
  );
};
