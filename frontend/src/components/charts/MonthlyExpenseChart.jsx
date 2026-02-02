import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function MonthlyExpenseChart({ transactions }) {
  const monthly = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      const month = new Date(tx.date).toLocaleString("default", {
        month: "short",
      });

      monthly[month] = (monthly[month] || 0) + tx.amount;
    }
  });

  const data = Object.keys(monthly).map((month) => ({
    month,
    amount: monthly[month],
  }));

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-3">Monthly Expenses</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
