import * as C from "./styled";

import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";

import { StatusItem } from "../../statusItem";

export const StatusModal = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useContext(MainContext);

  return (
    isOpen && (
      <C.Wrapper>
        <C.Container>
          {state.production.productsProduction.map((item) => (
            <StatusItem
              key={item.id}
              name={item.name}
              img={item.img}
              type={item.type}
              id={item.id}
            />
          ))}
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
