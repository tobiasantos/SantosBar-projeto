import * as C from "./styled";

import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDelete,
} from "react-icons/ai";

export const CartItem = ({ name, price, img, id, isPayment = false }) => {
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

  return (
    <C.ItemWrapper>
      <C.ItemImg src={img} />
      <C.ItemInfo>
        <C.ItemName>{name}</C.ItemName>
        {/* <C.ItemDescription>{description}</C.ItemDescription>*/}
      </C.ItemInfo>
      <C.AmountHandler>
        <C.ItemQuant>{getQuantity()}</C.ItemQuant>
        {isPayment ? (
          <span className="preco-unitario">{price}</span>
        ) : (
          <C.ItemBtns>
            <C.ItemBtnText onClick={() => addItem(id)}>
              <AiOutlinePlusCircle />
            </C.ItemBtnText>
            <C.ItemBtnText onClick={() => removeItem(id)}>
              <AiOutlineMinusCircle />
            </C.ItemBtnText>
          </C.ItemBtns>
        )}
      </C.AmountHandler>
      <C.ItemPrice>R$ {price * getQuantity()}</C.ItemPrice>
      {!isPayment && (
        <C.RemoveBtn onClick={() => deleteItem(id)}>
          <AiOutlineDelete />
        </C.RemoveBtn>
      )}
    </C.ItemWrapper>
  );
};
