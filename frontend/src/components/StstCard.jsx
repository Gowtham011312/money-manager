export default function StatCard({ title, value, color }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md flex flex-col gap-2">
      <p className="text-gray-500 dark:text-gray-300">{title}</p>
      <h2 className={`text-3xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}
