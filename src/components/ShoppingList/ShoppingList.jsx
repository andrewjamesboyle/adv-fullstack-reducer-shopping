import ShoppingListItem from './ShoppingListItem';

export default function ShoppingList({ shoppingList }) {
  return (
    <ul>{shoppingList.map((item) => {
      return (
        <li key={item.id}><ShoppingListItem item={item} /></li>
      );
    })}      
    </ul>
  );
}
