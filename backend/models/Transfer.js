import mongoose from "mongoose";

const transferSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  fromAccount: String,
  toAccount: String,
  amount: Number,
  date: Date,
  description: String,
});

export default mongoose.model("Transfer", transferSchema);
