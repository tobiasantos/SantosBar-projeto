import { createContext, useReducer } from "react";

import { inicialInfo, reducerInfo } from "../reducers/mainInfo";

const inicialState = {
  info: inicialInfo,
};

export const MainContext = createContext({
  state: inicialState,
  dispatch: () => null,
});

const mainReducer = (state, action) => ({
  info: reducerInfo(state.info, action),
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, inicialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
