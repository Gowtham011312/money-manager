// backend/controllers/transactionsController.js
import Transaction from "../models/Transaction.js";
import Account from "../models/Account.js";

// GET all transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET one transaction by ID
export const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE a transaction
export const createTransaction = async (req, res) => {
  try {
    const { amount, type, account } = req.body;

    const transaction = await Transaction.create(req.body);

    const acc = await Account.findById(account);
    if (!acc) return res.status(404).json({ message: "Account not found" });

    if (type === "income") acc.balance += amount;
    else acc.balance -= amount;

    await acc.save();

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE a transaction
export const updateTransaction = async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE a transaction
export const deleteTransaction = async (req, res) => {
  try {
    const deleted = await Transaction.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Transaction not found" });
    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
