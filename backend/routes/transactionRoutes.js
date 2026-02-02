// backend/routes/transactionRoutes.js
import express from "express";
import {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/", getTransactions);           // GET /api/transactions
router.get("/:id", getTransaction);         // GET /api/transactions/:id
router.post("/", createTransaction);        // POST /api/transactions
router.put("/:id", updateTransaction);      // PUT /api/transactions/:id
router.patch("/:id", updateTransaction);    // PATCH /api/transactions/:id (frontend uses this)
router.delete("/:id", deleteTransaction);   // DELETE /api/transactions/:id

export default router;
