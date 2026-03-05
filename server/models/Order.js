import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  subtotal: Number,
  tax: Number,
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);
