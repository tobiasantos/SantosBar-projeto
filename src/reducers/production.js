export const inicialProduction = {
  productsProduction: [],
  // ...product, status: "pending",
};

export const reducerProduction = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTION":
      Object.assign(state, action.payload);
      return state;
    case "ADD_PRODUCT":
      state.productsProduction.push(action.payload);
      return state;
    default:
      return state;
  }
};
