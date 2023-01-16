import { useContext } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList';
import { Context } from '../ShoppingListProvider';

export default function ShoppingListPage() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(Context);
  
  return <>
    <ShoppingList groceryList={state.groceryList} />
  </>;
}
