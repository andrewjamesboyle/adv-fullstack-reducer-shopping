export default function ShoppingListItem({ item }) {
  return <div>
    {item.item_name}
    {item.quantity}
  </div>;
}
