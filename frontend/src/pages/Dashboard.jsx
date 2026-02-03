import { useEffect, useState } from "react";
import api from "../services/api";
import AddTransactionModal from "../components/AddTransactionModal";
import EditTransactionModal from "../components/EditTransactionModal";
import IncomeExpenseChart from "../components/charts/IncomeExpenseChart";
import MonthlyExpenseChart from "../components/charts/MonthlyExpenseChart";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editTx, setEditTx] = useState(null);

  const fetchTransactions = async () => {
    const res = await api.get("/transactions");
    setTransactions(res.data || []);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // calculations
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  // last 5 transactions
  const lastFive = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="p-6 bg-gray-100 dark:bg-slate-900 min-h-screen">

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <StatCard 
          title="Total Income" 
          value={`₹${income}`} 
          color="text-green-500" 
        />

        <StatCard 
          title="Total Expense" 
          value={`₹${expense}`} 
          color="text-red-500" 
        />

        <StatCard 
          title="Balance" 
          value={`₹${balance}`} 
          color="text-blue-500" 
        />

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow">
          <IncomeExpenseChart transactions={transactions} />
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow">
          <MonthlyExpenseChart transactions={transactions} />
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow">

        <div className="flex justify-between items-center p-4 border-b dark:border-slate-700">
          <h2 className="font-semibold text-lg dark:text-white">
            Recent Transactions
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            + Add
          </button>
        </div>

        {lastFive.map((t) => (
          <div
            key={t._id}
            className="flex justify-between items-center p-4 border-b dark:border-slate-700"
          >
            <div>
              <p className="font-semibold dark:text-white">
                {t.category} ({t.division})
              </p>
              <p className="text-xs text-gray-400">
                {new Date(t.date).toLocaleString()}
              </p>
            </div>

            <div className="text-right">
              <p
                className={`font-bold ${
                  t.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {t.type === "income" ? "+" : "-"}₹{t.amount}
              </p>

              <button
                onClick={() => setEditTx(t)}
                className="text-blue-500 text-sm hover:underline"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODALS */}
      {showModal && (
        <AddTransactionModal
          onClose={() => setShowModal(false)}
          refresh={fetchTransactions}
        />
      )}

      {editTx && (
        <EditTransactionModal
          transaction={editTx}
          onClose={() => setEditTx(null)}
          refresh={fetchTransactions}
        />
      )}
    </div>
  );
}
