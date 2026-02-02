import { PieChart, Pie, Tooltip, Cell } from "recharts";

export default function IncomeExpenseChart({ transactions }) {
  let income = 0;
  let expense = 0;

  transactions.forEach((tx) => {
    tx.type === "income"
      ? (income += tx.amount)
      : (expense += tx.amount);
  });

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const colors = ["#22c55e", "#ef4444"];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-3">Income vs Expense</h3>

      <PieChart width={250} height={250}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={90}
          label
        >
          {data.map((_, i) => (
            <Cell key={i} fill={colors[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
