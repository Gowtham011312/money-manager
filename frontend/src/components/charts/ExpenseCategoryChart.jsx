import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#ef4444", "#f97316", "#3b82f6", "#8b5cf6", "#22c55e"];

export default function ExpenseCategoryChart({ transactions = [] }) {
  // ✅ SAFETY CHECK
  if (!Array.isArray(transactions)) {
    return (
      <div className="bg-white p-4 rounded-xl shadow text-center text-gray-500">
        No expense data
      </div>
    );
  }

  // ✅ GROUP EXPENSES BY CATEGORY
  const grouped = {};

  transactions
    .filter(tx => tx.type === "expense")
    .forEach(tx => {
      grouped[tx.category] =
        (grouped[tx.category] || 0) + tx.amount;
    });

  // ✅ CONVERT TO ARRAY FOR RECHARTS
  const data = Object.entries(grouped).map(([name, value]) => ({
    name,
    value,
  }));

  // ✅ NO DATA CASE
  if (data.length === 0) {
    return (
      <div className="bg-white p-4 rounded-xl shadow text-center text-gray-500">
        No expense data
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-4">Expense by Category</h2>

      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
          isAnimationActive
          animationBegin={200}
          animationDuration={1200}
        >
          {data.map((_, i) => (
            <Cell
              key={i}
              fill={COLORS[i % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
