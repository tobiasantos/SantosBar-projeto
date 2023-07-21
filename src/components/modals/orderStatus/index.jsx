import * as C from "./styled";

import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";

import { StatusItem } from "../../statusItem";

import { RxExit } from "react-icons/rx";
import back from "../../../assets/back.svg";

export const StatusModal = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useContext(MainContext);

  return (
    isOpen && (
      <C.Wrapper>
        <C.Container>
          {/* <div className="esc" onClick={() => setIsOpen(false)}>
            <img src={back} />
            Voltar
          </div> */}
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
            Voltar ao Menu
          </a>
        </C.Container>
      </C.Wrapper>
    )
  );
};
