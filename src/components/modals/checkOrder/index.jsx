import * as C from "./styled";

import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";

import { CartItem } from "../../cartItem";

export const OrderModal = ({ isOpen, setIsOpen }) => {
  const { state } = useContext(MainContext);
  return (
    isOpen && (
      <C.Wrapper>
        <C.Container onClick={() => setIsOpen(false)}>
          {state.cart.products.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              img={item.img}
              id={item.id}
            />
          ))}
        </C.Container>
      </C.Wrapper>
    )
  );
};
