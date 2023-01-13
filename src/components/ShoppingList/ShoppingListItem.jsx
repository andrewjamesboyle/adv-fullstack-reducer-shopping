export default function ShoppingListItem({ grocery }) {
  return <div>
    {grocery.id}
    {grocery.body}
  </div>;
}
