import { useState } from "react";
import api from "../services/api";

export default function AddAccountModal({ onClose, refresh }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Bank");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!name) return;

    try {
      setLoading(true);

      await api.post("/accounts", {
        name,
        type,
        balance: 0,
      });

      refresh();   // reload accounts
      onClose();   // close modal
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 space-y-4">
        <h2 className="font-bold text-lg">Add Account</h2>

        <input
          placeholder="Account Name (SBI / Axis / Cash)"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Bank">Bank</option>
          <option value="Cash">Cash</option>
        </select>

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            disabled={loading}
            className="bg-black text-white px-4 py-2 rounded"
          >
            {loading ? "Adding..." : "Add Account"}
          </button>
        </div>
      </div>
    </div>
  );
}
