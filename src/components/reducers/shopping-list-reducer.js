export const initialState = () => {
  return {
    shoppingList: [],
    shoppingListCandidateItem: '',
    shoppingListCandidateQty: 0,
  };
};


export const reducer = (state, action) => {
  switch(action.type) {
    case 'shopping-list-load-success':
      return {
        ...state, 
        shoppingList: action.shoppingList,
      };
    case 'shopping-list-candidate-item-changed':
      return {
        ...state,
        shoppingListCandidateItem: action.item
      };
    case 'shopping-list-candidate-qty-changed':
      return {
        ...state,
        shoppingListCandidateQty: action.quantity
      };
    default:
      return state;
  }
};
