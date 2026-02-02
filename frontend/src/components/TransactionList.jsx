export default function TransactionList({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-gray-500">
        No transactions found
      </p>
    );
  }

  return (
    <div className="mt-4">
      {data.map((t) => (
        <div
          key={t._id || Math.random()}
          className="p-3 mb-2 rounded bg-gray-100"
        >
          <p className="font-semibold">{t.category}</p>
          <p>₹{t.amount}</p>
        </div>
      ))}
    </div>
  );
}
