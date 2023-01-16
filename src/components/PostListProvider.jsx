import { createContext, useReducer } from 'react';

export const Context = createContext({
  state: initialState(), 
  reducer,
});

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  const contextObj = { state, dispatch };
  return (
    <Context.Provider value={contextObj}>{children}</Context.Provider>
  );
};
