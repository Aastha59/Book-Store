import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import SlidingBoxes from "../components/SlidingBoxes";
import StorySection from "../components/StorySection";

function Home({ cart, setCart, setIsCartOpen, darkMode }) {
  return (
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
  );
}

export default Home;