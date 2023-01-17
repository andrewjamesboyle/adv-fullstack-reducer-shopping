import { useContext, useEffect } from 'react';
import { getShoppingListItems } from '../../services/shopping-list-items';
// eslint-disable-next-line max-len
import { shoppingListLoadSuccessAction } from '../Actions/shopping-list-actions';
import ShoppingList from '../ShoppingList/ShoppingList';
import { Context } from '../ShoppingListProvider';

export default function ShoppingListPage() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    (async () => {
      const groceries = await getShoppingListItems();
      console.log('groceries', groceries);
      const action = shoppingListLoadSuccessAction(groceries);
      dispatch(action);
    });
  }, []);
  return <>
    <ShoppingList groceryList={state.groceryList} />
  </>;
}
