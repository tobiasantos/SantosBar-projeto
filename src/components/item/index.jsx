import * as C from "./styled";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

export const Item = ({ nome, descricao, preco, img, id }) => {
  const { state, dispatch } = useContext(MainContext);

  const addItem = (currentType) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id,
        name: nome,
        type: currentType,
        description: descricao,
        price: preco,
        img,
      },
    });
  };

  const removeItem = (currentType) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: { id },
    });
  };

  const getQuantity = () => {
    const item = state.cart.products.find((item) => item.id === id);
    if (item) {
      return item.quantity;
    } else {
      return 0;
    }
  };

  return (
    <>
      <C.ItemRow>
        <div className="card">
          <div className="image">
            {getQuantity() > 0 ? (
              <div className="quantity">
                <span> {getQuantity()}</span>
              </div>
            ) : (
              ""
            )}
            <img src={img} />
          </div>
          <div className="content">
            <div className="meta">
              <p>{nome}</p>
            </div>
            <p className="description">{descricao}</p>
            <div className="actions">
              <span>R$ {preco}</span>
              <div
                className="addRemove"
                id="add"
                onClick={() => addItem(state.info.currentProductView)}
              >
                <AiOutlinePlusCircle />
              </div>
              <div className="addRemove" onClick={() => removeItem()}>
                <AiOutlineMinusCircle />
              </div>
            </div>
          </div>
        </div>
      </C.ItemRow>
    </>
  );
};
