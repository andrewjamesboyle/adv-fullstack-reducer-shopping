import { useContext, useEffect } from 'react';
import { getShoppingListItems } from '../../services/shopping-list-items';
// eslint-disable-next-line max-len
import { shoppingListLoadSuccessAction } from '../Actions/shopping-list-actions';
import ShoppingList from '../ShoppingList/ShoppingList';
import ShoppingListForm from '../ShoppingList/ShoppingListForm';
import { Context } from '../ShoppingListProvider';

export default function ShoppingListPage() {
  
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    (async () => {
      const shoppingListItems = await getShoppingListItems();
      const action = shoppingListLoadSuccessAction(shoppingListItems);
      dispatch(action);
    })();
  }, []);

  return <>
    <ShoppingList shoppingList={state.shoppingList} />
  </>;
}
