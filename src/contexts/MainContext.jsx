import { createContext, useReducer } from "react";

import { inicialInfo, reducerInfo } from "../reducers/mainInfo";
import { inicialCart, reducerCart } from "../reducers/cart";
import { inicialProduction, reducerProduction } from "../reducers/production";

const inicialState = {
  info: inicialInfo,
  cart: inicialCart,
  production: inicialProduction,
};

export const MainContext = createContext({
  state: inicialState,
  dispatch: () => null,
});

const mainReducer = (state, action) => ({
  info: reducerInfo(state.info, action),
  cart: reducerCart(state.cart, action),
  production: reducerProduction(state.production, action),
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, inicialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
