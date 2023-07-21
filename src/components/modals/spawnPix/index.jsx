import * as C from "./styled";
import QRCode from "qrcode.react";

import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { RxExit } from "react-icons/rx";

export const PixModal = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useContext(MainContext);

  return (
    isOpen && (
      <C.Wrapper>
        <C.Container>
          <a className="esc" onClick={() => setIsOpen(false)}>
            <RxExit />
          </a>
          <h1>Escaneie o código abaixo para finalizar o pagamento</h1>
          <QRCode value="00020126580014BR.GOV.BCB.PIX0136e019745e-4b2c-4b7f-add6-6072b367ad8752040000530398654045.005802BR5922Tobias dos Santos Neto6009SAO PAULO6108054090006225052186XUxQpRjDO9bqj1d9o026304390C" />
          <h3>Mostre o comprovante na saída</h3>
        </C.Container>
      </C.Wrapper>
    )
  );
};
