import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import CartDrawer from "./components/CartDrawer";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import SlidingBoxes from "./components/SlidingBoxes";
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();

  // Hide cart drawer on checkout and success pages
  const hideCart = ["/checkout", "/success"].includes(location.pathname);

  return (
    <div className={darkMode ? "dark bg-black text-white" : "bg-white text-black"}>
      <Header
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isCartOpen={isCartOpen}
      />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductSection
              cart={cart}
              setCart={setCart}
              setIsCartOpen={setIsCartOpen}
              darkMode={darkMode}
            />
            <SlidingBoxes darkMode={darkMode} />
            <StorySection darkMode={darkMode} />
          </>
        } />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
              darkMode={darkMode}
            />
          }
        />

        <Route path="/success" element={<Success darkMode={darkMode} />} />
        
        <Route path="/terms" element={<Terms darkMode={darkMode} />} />
        <Route path="/privacy" element={<Privacy darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />

      </Routes>

      <Footer />

      {/* Only render CartDrawer on home page */}
      {!hideCart && (
        <CartDrawer
          cart={cart}
          setCart={setCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}

export default App;