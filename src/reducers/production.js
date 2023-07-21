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
    case "UPDATE_STATUS_PRODUCTION":
      for (let product of state.productsProduction) {
        if (product.id === action.payload.id) {
          product.status = action.payload.status;
        }
      }
      return state;
    default:
      return state;
  }
};
