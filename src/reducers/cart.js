export const inicialCart = {
  id: 0,
  totalPrice: 0,
  products: [],
  // {
  //   id: 1,
  //   type: 'beer',
  //   name: 'Budweiser 600 ml',
  //   description: 'Cerveja Budweiser 600 ml',
  //   price: 13.99,
  //   image: 'bud',
  //   quantity: 1
  // },
};

export const reducerCart = (state, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      Object.assign(state, action.payload);
      return state;

    case "ADD_PRODUCT":
      const product = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      if (productIndex === -1) {
        product.quantity = 1;
        state.products.push(product);
      } else {
        state.products[productIndex].quantity++;
      }
      return state;

    case "REMOVE_PRODUCT":
      const productId = action.payload.id;
      const productIndexRemove = state.products.findIndex(
        (p) => p.id === productId
      );
      if (productIndexRemove !== -1) {
        state.products[productIndexRemove].quantity &&
          state.products[productIndexRemove].quantity--;
      }
      return state;

    case "INCREASE_PRODUCT":
      const productIdIncrease = action.payload.id;
      const productIndexIncrease = state.products.findIndex(
        (p) => p.id === productIdIncrease
      );
      if (productIndexIncrease !== -1) {
        state.products[productIndexIncrease].quantity++;
      }
      return state;

    case "DELETE_PRODUCT":
      const productIdAll = action.payload.id;
      const productIndexRemoveAll = state.products.findIndex(
        (p) => p.id === productIdAll
      );
      if (productIndexRemoveAll !== -1) {
        state.products.splice(productIndexRemoveAll, 1);
      }
      return state;
    default:
      return state;
  }
};
