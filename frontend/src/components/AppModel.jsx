import { useState } from "react";
import api from "../services/api";

export default function AddModal({ close }) {
  const [type, setType] = useState("expense");
  const [form, setForm] = useState({
    amount: "",
    category: "",
    division: "Personal",
    description: "",
    date: new Date(),
  });

  const submit = async () => {
    await api.post("/transactions", { ...form, type });
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="font-bold mb-4">Add {type}</h2>

        <select onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <input
          placeholder="Amount"
          className="input"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <input
          placeholder="Category"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <button onClick={submit} className="btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}
