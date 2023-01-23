import { useContext, useEffect } from 'react';
// eslint-disable-next-line max-len
import { createShoppingListItem, getShoppingListItems } from '../../services/shopping-list-items';
// eslint-disable-next-line max-len
import { shoppingListCandidateItemChanged, shoppingListCandidateQtyChanged, shoppingListLoadSuccessAction } from '../Actions/shopping-list-actions';
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

  const onItemChanged = (item) => {
    dispatch(shoppingListCandidateItemChanged(item));
  };

  const onQtyChanged = (quantity) => {
    dispatch(shoppingListCandidateQtyChanged(quantity));
  };

  return <>
    <ShoppingListForm item={state.shoppingListCandidateItem}
      quantity={state.shoppingListCandidateQty}
      onItemChanged={onItemChanged}
      onQtyChanged={onQtyChanged} 
      onSubmit={async (item, quantity) => {
        await createShoppingListItem(item, quantity);
        const items = await getShoppingListItems();
        dispatch(shoppingListLoadSuccessAction(items));
        dispatch(shoppingListCandidateItemChanged(''));
        dispatch(shoppingListCandidateQtyChanged(''));
      }} />
    <ShoppingList shoppingList={state.shoppingList} />
  </>;
}
