import ShoppingListItem from './ShoppingListItem';

export default function ShoppingList({ groceryList }) {
  return (
    <ul>{groceryList.map((grocery) => {
      return (
        <li key={grocery.id}><ShoppingListItem grocery={grocery} /></li>
      );
    })}      
    </ul>
  );
}
