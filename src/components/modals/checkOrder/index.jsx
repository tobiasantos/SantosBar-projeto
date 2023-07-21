import * as C from "./styled";

import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";

import { CartItem } from "../../cartItem";

export const OrderModal = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useContext(MainContext);

  const getTotalPrice = () => {
    let total = 0;
    state.cart.products.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    isOpen && (
      <C.Wrapper>
        <C.Container>
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
          <a
            className="sendButton"
            onClick={() => {
              setIsOpen(false);
              dispatch({
                type: "UPDATE_PRODUCTION",
                payload: { productsProduction: [...state.cart.products] },
              });
            }}
          >
            Finalizar Pedido
          </a>
        </C.Container>
      </C.Wrapper>
    )
  );
};
