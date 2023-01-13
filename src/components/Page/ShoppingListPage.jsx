export default function ShoppingListPage() {
  const groceryList = [
    { id: 1, body: 'bananas' },
  ];
  
  return <>
    <ShoppingList groceryList={groceryList} />
  </>;
}
