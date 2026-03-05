import { ImBin2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";


function CartDrawer({ cart, setCart, isCartOpen, setIsCartOpen, darkMode, setDarkMode }) {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;
  const navigate = useNavigate();

  return (
    <>
      {/* 🔶 Drawer Only (No Overlay) */}
      <div
        className={`fixed right-0 top-29 w-96 h-[calc(100vh-100px)]
  ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
  shadow-2xl z-50
  transform transition-transform duration-500 ease-in-out
  ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Header */}
        <div className="p-6 flex justify-between border-b">
          <h3 className="text-lg font-semibold">Your Selection</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-6 space-y-4 overflow-y-auto h-[60%]">
          {cart.length === 0 && (
            <p className="text-gray-500">Your bag is empty.</p>
          )}

          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-3">
              <div>
                <strong>{item.name}</strong>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.qty}
                </p>
              </div>
              <button
                onClick={() =>
                  setCart(cart.filter((_, i) => i !== index))
                }
                className="text-red-500 cursor-pointer"
              >
                <ImBin2 />

              </button>
            </div>
          ))}
        </div>

        {/* Billing */}
        {cart.length > 0 && (
          <div
            className={`absolute bottom-0 w-full p-6 border-t
  ${darkMode ? "bg-gray-900" : "bg-white"}`}
          >

            <p className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-700">FREE</span>
            </p>
            <p className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{tax}</span>
            </p>
            <p className="flex justify-between font-bold text-lg mt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </p>

            <button
              onClick={() => navigate("/checkout")}
              className={`mt-4 cursor-pointer rounded-xl w-full py-3 transition ${darkMode ? "bg-white text-black  hover:bg-yellow-400" : "bg-black text-white hover:bg-yellow-400 hover:text-black"}`}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;
