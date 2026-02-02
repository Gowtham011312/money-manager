import { useEffect, useState } from "react";
import api from "../services/api";
import AddAccountModal from "../components/AddAccountModal";

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  // ✅ THIS WAS MISSING
  const fetchAccounts = async () => {
    try {
      const res = await api.get("/accounts");
      setAccounts(res.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  // fetch accounts on page load
  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Accounts</h1>

        <button
          onClick={() => setShowAdd(true)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Add Account
        </button>
      </div>

      {/* ACCOUNTS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accounts.length === 0 ? (
          <p className="text-gray-500">No accounts found</p>
        ) : (
          accounts.map(acc => (
            <div
              key={acc._id}
              className="bg-white rounded-xl shadow p-4 flex justify-between"
            >
              <span className="font-semibold">{acc.name}</span>
              <span>₹{acc.balance}</span>
            </div>
          ))
        )}
      </div>

      {/* ADD ACCOUNT MODAL */}
      {showAdd && (
        <AddAccountModal
          onClose={() => setShowAdd(false)}
          refresh={fetchAccounts} // ✅ NOW DEFINED
        />
      )}
    </div>
  );
}
