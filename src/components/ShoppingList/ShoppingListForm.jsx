export default function ShoppingListForm({
  onSubmit,
  item,
  quantity,
  onItemChanged,
  onQtyChanged,
}) {

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(item, quantity);
    }}
    >
      <input
        type="text"
        placeholder="Item"
        value={item}
        onChange={(e) => {
          onItemChanged(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="qty"
        value={quantity}
        onChange={(e) => {
          onQtyChanged(e.target.value);
        }}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
