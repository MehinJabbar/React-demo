export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 📐</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Packed Everything!"
          : `You have ${numItems} items on your list, and you have packed ${numPacked} (${percentage}%) of them.`}
      </em>
    </footer>
  );
}
