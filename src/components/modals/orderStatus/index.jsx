import * as C from "./styled";

import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";

import { StatusItem } from "../../statusItem";

import { RxExit } from "react-icons/rx";

export const StatusModal = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useContext(MainContext);

  return (
    isOpen && (
      <C.Wrapper>
        <C.Container>
        <a className="esc" onClick={() => setIsOpen(false)}>
            <RxExit />
          </a>
          {state.production.productsProduction.map((item) => (
            <StatusItem
              key={item.id}
              name={item.name}
              img={item.img}
              type={item.type}
              id={item.id}
            />
          ))}
          <a
          className="sendButton"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Ir para pagamento
          </a>
        </C.Container>
      </C.Wrapper>
    )
  );
};
