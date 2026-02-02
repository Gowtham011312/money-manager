// controllers/accountController.js
import Account from "../models/Account.js";

export const getAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
};

export const createAccount = async (req, res) => {
  const acc = await Account.create(req.body);
  res.json(acc);
};
