export const inicialInfo = {
  teste: 0,
};

export const reducerInfo = (state, action) => {
  switch (action.type) {
    case "UPDATE_INFO":
      Object.assign(state, action.payload);
      return state;
  }
};
