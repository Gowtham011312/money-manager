import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#6366f1", "#14b8a6"];

export default function DivisionChart({ transactions }) {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return (
      <div className="bg-white p-4 rounded-xl shadow text-center text-gray-500">
        No division data
      </div>
    );
  }

  const grouped = transactions.reduce(
    (acc, tx) => {
      if (tx.division === "Personal") acc.personal += tx.amount;
      if (tx.division === "Office") acc.office += tx.amount;
      return acc;
    },
    { personal: 0, office: 0 }
  );

  const data = [
    { name: "Personal", value: grouped.personal },
    { name: "Office", value: grouped.office },
  ].filter(d => d.value > 0);

  if (data.length === 0) {
    return (
      <div className="bg-white p-4 rounded-xl shadow text-center text-gray-500">
        No division data
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-4">Personal vs Office</h2>

      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          isAnimationActive
          animationBegin={200}
          animationDuration={1200}
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
