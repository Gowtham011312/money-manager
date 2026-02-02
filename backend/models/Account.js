import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  balance: Number,
});

export default mongoose.model("Account", accountSchema);
