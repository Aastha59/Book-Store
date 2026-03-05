import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import Order from "../models/Order.js";

const router = express.Router();



router.post("/order", async (req, res) => {
  try {

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { amount } = req.body;

    const options = {
      amount,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json(order);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating order" });
  }
});


/* ───────── Validate Payment ───────── */

router.post("/order/validate", (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  const hmac = crypto.createHmac(
    "sha256",
    process.env.RAZORPAY_KEY_SECRET
  );

  hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const generated_signature = hmac.digest("hex");

  if (generated_signature !== razorpay_signature) {
    return res.status(400).json({ message: "Invalid Signature" });
  }

  res.status(200).json({ message: "Payment verified successfully" });
});

/* ───────── Save Order In DB ───────── */

router.post("/save-order", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error saving order" });
  }
});

export default router;
