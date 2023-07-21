export const inicialProduction = {
  productsProduction: [],
  // ...product, status: "pending",
};

export const reducerProduction = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTION":
      for (let product of action.payload.productsProduction) {
        product.status = "Aguardando confirmação da cozinha...";
        state.productsProduction.push(product);
      }
      return state;
    case "ADD_PRODUCTION_PRODUCT":
      state.productsProduction.push(action.payload);
      return state;
    default:
      return state;
  }
};
