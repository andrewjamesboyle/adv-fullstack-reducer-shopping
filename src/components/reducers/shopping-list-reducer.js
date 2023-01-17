export const initialState = () => {
  return {
    shoppingList: [
      { id: 1, body: 'bananas' },
    ],
  };
};


export const reducer = (state, action) => {
  switch(action.type) {
    case 'shopping-list-load-success':
      return {
        ...state, 
        shoppingList: action.shoppingList,
      };
    default:
      return state;
  }
};
