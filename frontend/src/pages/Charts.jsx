import { useEffect, useState } from "react";
import api from "../services/api";

import IncomeCategoryChart from "../components/charts/IncomeCategoryChart";
import ExpenseCategoryChart from "../components/charts/ExpenseCategoryChart";
import MonthlyIncomeExpenseChart from "../components/charts/MonthlyIncomeExpenseChart";
import DivisionChart from "../components/charts/DivisionChart";

export default function Charts() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("/transactions").then(res => {
      setTransactions(res.data || []);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Charts & Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IncomeCategoryChart transactions={transactions} />
        <ExpenseCategoryChart transactions={transactions} />
        <DivisionChart transactions={transactions} />
        <MonthlyIncomeExpenseChart transactions={transactions} />
      </div>
    </div>
  );
}
