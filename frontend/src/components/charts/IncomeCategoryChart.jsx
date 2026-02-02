import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444", "#8b5cf6"];

export default function IncomeCategoryChart({ transactions }) {
  // ✅ SAFETY
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return (
      <div className="bg-white p-4 rounded-xl shadow text-center text-gray-500">
        No income data
      </div>
    );
  }

  // ✅ GROUP INCOME BY CATEGORY
  const grouped = transactions.reduce((acc, tx) => {
    if (tx.type === "income") {
      acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    }
    return acc;
  }, {});

  const data = Object.entries(grouped).map(([name, value]) => ({
    name,
    value,
  }));

  if (data.length === 0) {
    return (
      <div className="bg-white p-4 rounded-xl shadow text-center text-gray-500">
        No income data
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-4">Income by Category</h2>

      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
