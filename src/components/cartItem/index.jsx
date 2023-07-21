import * as C from "./styled";

import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

export const CartItem = ({ name, description, price, img, id }) => {
  const { state, dispatch } = useContext(MainContext);

  const addItem = (id) => {
    dispatch({
      type: "INCREASE_PRODUCT",
      payload: { id },
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: { id },
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: { id },
    });
  };

  const getQuantity = () => {
    const item = state.cart.products.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };
  // 220 x 365
  return (
    <C.ItemWrapper>
      <C.ItemImg src={img} />
      <C.ItemInfo>
        <C.ItemName>{name}</C.ItemName>
        <C.ItemDescription>{description}</C.ItemDescription>
      </C.ItemInfo>
      <C.AmountHandler>
        <C.ItemQuant>{getQuantity()}</C.ItemQuant>
        <C.ItemBtns>
          <C.ItemBtnText onClick={() => addItem(id)}>+</C.ItemBtnText>
          <C.ItemBtnText onClick={() => removeItem(id)}>-</C.ItemBtnText>
        </C.ItemBtns>
      </C.AmountHandler>
      <C.ItemPrice>R$ {price * getQuantity()}</C.ItemPrice>
      <C.RemoveBtn onClick={() => deleteItem(id)}>X</C.RemoveBtn>
    </C.ItemWrapper>
  );
};
