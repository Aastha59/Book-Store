import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Jammu & Kashmir",
  "Ladakh","Puducherry","Chandigarh",
];

function Checkout({ cart, setCart, darkMode }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [address, setAddress] = useState({
    name: "", phone: "", address: "", city: "", state: "", pincode: "",
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!address.name.trim())                  e.name    = "Full name is required";
    if (!/^\d{10}$/.test(address.phone))       e.phone   = "Enter a valid 10-digit number";
    if (!address.address.trim())               e.address = "Street address is required";
    if (!address.city.trim())                  e.city    = "City is required";
    if (!address.state)                        e.state   = "Select a state";
    if (!/^\d{6}$/.test(address.pincode))      e.pincode = "Enter a valid 6-digit pincode";
    return e;
  };

  const handlePayment = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/order", {
        amount: total * 100,
        // currency: "INR",
        // receipt: "receipt_" + Date.now(),
      });

      const options = {
        key: "YOUR_TEST_KEY",
        amount: data.amount,
        currency: data.currency,
        name: "Ethereal Strokes",
        description: "Book Purchase",
        order_id: data.id,

        handler: async function (response) {
          const validateRes = await axios.post(
            "http://localhost:5000/order/validate",
            response
          );
          if (validateRes.status === 200) {
            await axios.post("http://localhost:5000/save-order", {
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              items: cart,
              address,
              subtotal,
              tax,
              total,
            });
            setCart([]);
            navigate("/success");
          }
        },

        prefill: { name: address.name, contact: address.phone },
        theme: { color: "#FACC15" },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const razor = new window.Razorpay(options);
      razor.on("payment.failed", () => setLoading(false));
      razor.open();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ── theme shortcuts ──
  const dm    = darkMode;
  const bg    = dm ? "bg-gray-900"   : "bg-[#FAF8F5]";
  const card  = dm ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";
  const text  = dm ? "text-white"    : "text-gray-900";
  const muted = dm ? "text-gray-400" : "text-gray-500";
  const inputBase =
    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 " +
    (dm
      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-yellow-400 focus:bg-gray-600"
      : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-yellow-400 focus:bg-white");

  const Field = ({ name, label, children }) => (
    <div>
      <label className={`block text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${muted}`}>
        {label}
      </label>
      {children}
      {errors[name] && (
        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
          <span>⚠</span> {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors duration-300`}>

      {/* Top accent stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

      <div className="max-w-5xl mx-auto px-4 pt-12 pb-20">

        {/* Page heading */}
        <div className="mb-10">
          <p className={`text-[11px] uppercase tracking-[0.35em] font-semibold mb-2 ${dm ? "text-yellow-400" : "text-yellow-600"}`}>
            Secure Checkout
          </p>
          <h1 className="text-3xl font-serif font-bold">Complete Your Order</h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ══ LEFT — Address + Payment badge ══ */}
          <div className="lg:col-span-3 space-y-4">

            {/* Address card */}
            <div className={`rounded-2xl border p-7 shadow-sm ${card}`}>
              <div className="flex items-center gap-3 mb-7">
                <span className="w-7 h-7 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-lg font-serif font-bold">Delivery Address</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="col-span-2">
                  <Field name="name" label="Full Name">
                    <input
                      name="name" type="text" value={address.name}
                      onChange={handleChange} placeholder="Jasmeet Kaur"
                      className={`${inputBase} ${errors.name ? "border-red-400" : ""}`}
                    />
                  </Field>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <Field name="phone" label="Phone Number">
                    <input
                      name="phone" type="tel" maxLength={10} value={address.phone}
                      onChange={handleChange} placeholder="9876543210"
                      className={`${inputBase} ${errors.phone ? "border-red-400" : ""}`}
                    />
                  </Field>
                </div>

                <div className="col-span-2">
                  <Field name="address" label="Street Address">
                    <textarea
                      name="address" rows={2} value={address.address}
                      onChange={handleChange} placeholder="House No., Street, Landmark"
                      className={`${inputBase} resize-none ${errors.address ? "border-red-400" : ""}`}
                    />
                  </Field>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <Field name="city" label="City">
                    <input
                      name="city" type="text" value={address.city}
                      onChange={handleChange} placeholder="Amritsar"
                      className={`${inputBase} ${errors.city ? "border-red-400" : ""}`}
                    />
                  </Field>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <Field name="state" label="State">
                    <select
                      name="state" value={address.state} onChange={handleChange}
                      className={`${inputBase} ${errors.state ? "border-red-400" : ""}`}
                    >
                      <option value="">Select State</option>
                      {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <Field name="pincode" label="Pincode">
                    <input
                      name="pincode" type="text" maxLength={6} value={address.pincode}
                      onChange={handleChange} placeholder="143001"
                      className={`${inputBase} ${errors.pincode ? "border-red-400" : ""}`}
                    />
                  </Field>
                </div>

              </div>
            </div>

          </div>

          {/* ══ RIGHT — Order Summary ══ */}
          <div className="lg:col-span-2">
            <div className={`rounded-2xl border p-6 shadow-sm sticky top-24 ${card}`}>
              <h2 className="text-lg font-serif font-bold mb-5">Order Summary</h2>

              {/* Cart items */}
              <div className="space-y-3 mb-5">
                {cart.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className={`text-xs ${muted}`}>Qty: {item.qty}</p>
                    </div>
                    <p className="text-sm font-semibold shrink-0">₹{item.price * item.qty}</p>
                  </div>
                ))}
              </div>

              <div className={`border-t mb-4 ${dm ? "border-gray-700" : "border-gray-100"}`} />

              {/* Bill breakdown */}
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className={muted}>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className={muted}>Shipping</span>
                  <span className="text-green-500 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className={muted}>GST (18%)</span>
                  <span>₹{tax}</span>
                </div>
              </div>

              <div className={`border-t my-4 ${dm ? "border-gray-700" : "border-gray-100"}`} />

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-base">Total</span>
                <span className="text-2xl font-black text-yellow-500">₹{total}</span>
              </div>

              {/* ── Pay Now Button ── */}
              <button
                onClick={handlePayment}
                disabled={loading || cart.length === 0}
                className={`
                  relative cursor-pointer w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest
                  overflow-hidden transition-all duration-300
                  ${loading
                    ? "bg-yellow-300 text-black cursor-not-allowed"
                    : "bg-yellow-400 text-black hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 active:scale-[0.98]"
                  }
                  disabled:opacity-60
                `}
              >
                {/* Shimmer sweep animation when loading */}
                {loading && (
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    style={{ animation: "shimmer 1.3s infinite" }}
                  />
                )}

                <span className="relative flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Opening Payment…
                    </>
                  ) : (
                    <>Pay ₹{total}</>
                  )}
                </span>
              </button>

              <p className={`text-center text-[11px] mt-3 ${muted}`}>
                🔐 Secured by Razorpay · 256-bit SSL Encryption
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Shimmer keyframe injected inline */}
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </div>
  );
}

export default Checkout;