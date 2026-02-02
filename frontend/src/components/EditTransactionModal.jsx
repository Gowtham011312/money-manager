import { useState } from "react";
import api from "../services/api";

// const [lastDeleted, setLastDeleted] = useState(null);

export default function EditTransactionModal({ transaction, onClose, refresh }) {
  const [form, setForm] = useState({
    type: transaction.type,
    amount: transaction.amount,
    category: transaction.category,
    division: transaction.division,
    description: transaction.description,
    date: transaction.date.slice(0, 16), // for datetime-local
  });

  const handleSubmit = async () => {
    await api.patch(`/transactions/${transaction._id}`, {
       type: form.type,
      division: form.division,
      amount: Number(form.amount),
      category: form.category,
      description: form.description,
      date: form.date,
    });
    refresh();
    onClose();
  };

const handleDelete = async () => {
  try {
    await api.delete(`/transactions/${transaction._id}`);
    refresh();     // reload list
    onClose();     // close modal
  } catch (err) {
    alert(err.response?.data?.message || "Delete failed");
  }
};


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-96 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Edit Transaction</h2>

        <select
            className="w-full border p-2 rounded mb-3"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>

        <select
            className="w-full border p-2 rounded mb-3"
            value={form.division}
            onChange={(e) => setForm({ ...form, division: e.target.value })}
            >
            <option value="Personal">Personal</option>
            <option value="Office">Office</option>
        </select>


        <input
          type="number"
          placeholder="Amount"
          className="w-full border p-2 rounded mb-3"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full border p-2 rounded mb-3"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        
        
        {/* <input
          type="datetime-local"
          className="w-full border p-2 rounded mb-3"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        /> */}

        <input
          type="text"
          placeholder="Description"
          className="w-full border p-2 rounded mb-4"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <div className="flex justify-between gap-3">
         <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded"
            >
            Delete
            </button>

          <div className="flex gap-2">
            <button onClick={onClose}>Cancel</button>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
