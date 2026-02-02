import express from "express";
import {
  createAccount,
  getAccounts,
} from "../controllers/accountController.js";

const router = express.Router();

router.get("/", getAccounts);
router.post("/", createAccount);

export default router; // ✅ IMPORTANT
