export const inicialInfo = {
  currentProductView: "",
};

export const reducerInfo = (state, action) => {
  switch (action.type) {
    case "UPDATE_INFO":
      Object.assign(state, action.payload);
      return state;
    default:
      return state;
  }
};
