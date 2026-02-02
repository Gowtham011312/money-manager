import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true
    },
        
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    division: {
      type: String,
      enum: ["Personal", "Office"],
      default: "Personal",
    },
    description: String,

    // ✅ AUTO DATE (CORRECT)
    date: {
      type: Date,
      default: Date.now,
    },

    
    
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
