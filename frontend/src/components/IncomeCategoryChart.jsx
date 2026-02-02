import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function IncomeCategoryChart({ data }) {
  // Group income by category
  const grouped = {};

  data.forEach(tx => {
    grouped[tx.category] = (grouped[tx.category] || 0) + tx.amount;
  });

  const chartData = Object.keys(grouped).map(key => ({
    category: key,
    amount: grouped[key],
  }));

  if (chartData.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No income data available
      </p>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Income by Category
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
