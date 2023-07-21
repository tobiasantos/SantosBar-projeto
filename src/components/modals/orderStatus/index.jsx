import * as C from "./styled";

import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";

export const StatusModal = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useContext(MainContext);

  return (
    isOpen && (
      <C.Wrapper>
        <C.Container>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Chama na bota
          </button>
        </C.Container>
      </C.Wrapper>
    )
  );
};
