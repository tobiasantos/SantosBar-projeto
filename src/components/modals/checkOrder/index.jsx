import * as C from "./styled";

import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { RxExit } from "react-icons/rx";
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
          <a className="esc" onClick={() => setIsOpen(false)}>
            <RxExit />
          </a>
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

          {state.cart.products.length > 0 && (
            <h2>Total: R$ {getTotalPrice().toFixed(2)}</h2>
          )}

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
