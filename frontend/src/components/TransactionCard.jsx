

export default function TransactionCard({ tx, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center mb-3">
      <div>
        <p className="font-semibold text-lg">
          {tx.category}
          <span className="text-sm text-gray-500 ml-2">
            ({tx.division})
          </span>
        </p>

        <p className="text-sm text-gray-500">
          {new Date(tx.date || tx.createdAt).toLocaleString()}
        </p>

        {tx.description && (
          <p className="text-sm text-gray-600 mt-1">
            {tx.description}
          </p>
        )}
      </div>

      <div className="text-right">
        <p
          className={`text-lg font-bold ${
            tx.type === "income"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {tx.type === "income" ? "+" : "-"} ₹{tx.amount}
        </p>

        <button
          onClick={() => onEdit(tx)}
          className="text-blue-600 text-sm mt-1"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
