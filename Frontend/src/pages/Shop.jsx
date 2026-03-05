import ProductSection from "../components/ProductSection";

function Shop({ cart, setCart, setIsCartOpen, darkMode }) {
  return (
    <div className="min-h-screen pt-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Shop Our Book</h1>
        <p className="text-gray-600 mt-2">Master the art of nail design</p>
      </div>
      <ProductSection
        cart={cart}
        setCart={setCart}
        setIsCartOpen={setIsCartOpen}
        darkMode={darkMode}
      />
    </div>
  );
}

export default Shop;