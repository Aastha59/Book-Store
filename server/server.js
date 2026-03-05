// import express from "express";
// import cors from "cors";
// import Razorpay from "razorpay";
// import { config } from 'dotenv';
// import crypto from "crypto";

// const app = express();

// config();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());


// app.post("/order", async (req, res) => {
//     try {
//         const razorpay = new Razorpay({
//             key_id: process.env.RAZORPAY_KEY_ID,
//             key_secret: process.env.RAZORPAY_KEY_SECRET,
//         })

//         // const options = {
//         //     amount: 50000,
//         //     currency: "INR",
//         //     receipt: "receipt#1",
//         // };
//         const options = req.body;
//         const order = await razorpay.orders.create(options);

//         if (!order) {
//             return res.status(500).send("Some error occured");
//         }

//         res.status(200).json(order);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// app.post("/order/validate", (req, res) => {

//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
//     sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
//     const digest = sha.digest("hex");

//     if(digest !== razorpay_signature) {
//         return res.status(400).json({ msg: "Transaction is not matched" });
//     }

//     res.status(200).json({ 
//         msg: "Transaction is successful",
//         orderId: razorpay_order_id,
//         paymentId: razorpay_payment_id
//     });
// });


// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });












// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import paymentRoutes from "./routes/paymentRoutes.js";

// dotenv.config();

// const app = express();

// /* ───────── Middlewares ───────── */

// app.use(cors());
// app.use(express.json());

// /* ───────── MongoDB Connection ───────── */

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log("MongoDB Error:", err));

// /* ───────── Routes ───────── */

// app.use("/", paymentRoutes);

// /* ───────── Start Server ───────── */

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT} 🚀`);
// });












import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config({ path: "./.env" });

const app = express();

/* ───────── Middlewares ───────── */

app.use(cors());
app.use(express.json());

/* ───────── Routes ───────── */

app.use("/", paymentRoutes);

/* ───────── Start Server AFTER DB Connect ───────── */

const startServer = async () => {
  try {
    // 1️⃣ Connect MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // 2️⃣ Start Server ONLY if DB connected
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} `);
    });

  } catch (error) {
    console.error("Database connection failed ");
    console.error(error);
    process.exit(1); // stop server if DB fails
  }
};

startServer();
