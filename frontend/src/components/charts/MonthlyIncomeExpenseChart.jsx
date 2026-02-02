import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function MonthlyIncomeExpenseChart({ transactions = [] }) {
  // ✅ SAFETY
  if (!Array.isArray(transactions)) {
    return <p className="text-center text-gray-500">No data</p>;
  }

  const monthly = {};

  transactions.forEach(tx => {
    const date = new Date(tx.date);
    const key = `${date.getFullYear()}-${date.getMonth() + 1}`;

    if (!monthly[key]) {
      monthly[key] = { month: key, income: 0, expense: 0 };
    }

    if (tx.type === "income") {
      monthly[key].income += tx.amount;
    } else {
      monthly[key].expense += tx.amount;
    }
  });

  const data = Object.values(monthly);

  if (data.length === 0) {
    return <p className="text-center text-gray-500">No data</p>;
  }
  

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-4">Monthly Income vs Expense</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#22c55e" />
          <Bar dataKey="expense" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
