// import { useState } from "react";

// function ProductSection({
//   cart,
//   setCart,
//   setIsCartOpen,
//   darkMode,
//   setDarkMode,
// }) {
//   const [qty, setQty] = useState(1);

//   const addToCart = () => {
//     const existing = cart.find((item) => item.name === "Ethereal Strokes Book");

//     if (existing) {
//       setCart(
//         cart.map((item) =>
//           item.name === "Ethereal Strokes Book"
//             ? { ...item, qty: item.qty + qty }
//             : item,
//         ),
//       );
//     } else {
//       setCart([
//         ...cart,
//         {
//           name: "Ethereal Strokes Book",
//           price: 2499,
//           qty,
//         },
//       ]);
//     }

//     setIsCartOpen(true);
//   };

//   return (
//     <section
//       id="collection"
//       className="grid lg:grid-cols-2 gap-12 lg:gap-20 
//                  px-6 sm:px-10 md:px-16 lg:px-20 
//                  py-12 sm:py-16 lg:py-20 
//                  items-center"
//     >
//       {/* 🔶 Image Section */}
//       {/* 🔶 Image Section */}
//       <div className="relative mx-auto w-full max-w-md lg:max-w-none">
//         {/* Scale Wrapper (IMPORTANT) */}
//         <div
//           className="relative group transition-transform duration-500 
//                   lg:hover:scale-105"
//         >
//           {/* Yellow Layer */}
//           <div
//             className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6
//                     w-full h-full rounded-3xl bg-yellow-400 z-0"
//           ></div>

//           {/* Image Container (prevents height jump) */}
//           <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
//             <img
//               src="Gemini_Generated_Image_cf5s5qcf5s5qcf5s.png"
//               alt="Product"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* 🔶 Content Section */}
//       <div className="text-center lg:text-left">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
//           Ethereal Strokes: The Masterclass
//         </h2>

//         {/* Rating */}
//         <div className="flex justify-center lg:justify-start items-center gap-2 mt-3 text-yellow-500">
//           ⭐ ⭐ ⭐ ⭐ ⭐
//           <span className="text-gray-600 text-sm">(128 Reviews)</span>
//         </div>

//         <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-5">
//           ₹2,499
//         </p>

//         <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
//           This book is not the end of nail art—it is just the beginning. Learn
//           Jasmeet's personal techniques developed over 5 years.
//         </p>

//         <div className="flex justify-center lg:justify-start mt-8">
//           {" "}
//           <div className="flex items-center border rounded-md overflow-hidden">
//             {" "}
//             <button
//               onClick={() => qty > 1 && setQty(qty - 1)}
//               className={`px-4 py-2 hover:bg-gray-100 transition cursor-pointer ${darkMode ? "dark:hover:bg-gray-300 hover:text-black" : ""}`}
//             >
//               {" "}
//               −{" "}
//             </button>{" "}
//             <span className="px-6">{qty}</span>{" "}
//             <button
//               onClick={() => setQty(qty + 1)}
//               className={`px-4 py-2 hover:bg-gray-100 transition cursor-pointer ${darkMode ? "dark:hover:bg-gray-300 hover:text-black" : ""}`}
//             >
//               {" "}
//               +{" "}
//             </button>{" "}
//           </div>{" "}
//         </div>

//         {/* Add to Cart */}
//         <button
//           onClick={addToCart}
//           className={`mt-8 w-full sm:w-auto lg:w-full
//           px-10 py-4 rounded-md transition cursor-pointer duration-300
//           ${
//             darkMode
//               ? "bg-white text-black hover:bg-yellow-400"
//               : "bg-black text-white hover:bg-yellow-400 hover:text-black"
//           }`}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </section>
//   );
// }

// export default ProductSection;









import { useState } from "react";

function ProductSection({
cart,
setCart,
setIsCartOpen,
darkMode,
setDarkMode,
}) {
const [qty, setQty] = useState(1);

// 🔥 Image Slider Data
const images = [
"/Gemini_Generated_Image_cf5s5qcf5s5qcf5s.png",
"/img1.png",
"/img2.png",
// "/img3.png",
];

const [current, setCurrent] = useState(0);

const prevSlide = () => {
setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
};

const nextSlide = () => {
setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
};

const addToCart = () => {
const existing = cart.find((item) => item.name === "Ethereal Strokes Book");

```
if (existing) {
  setCart(
    cart.map((item) =>
      item.name === "Ethereal Strokes Book"
        ? { ...item, qty: item.qty + qty }
        : item
    )
  );
} else {
  setCart([
    ...cart,
    {
      name: "Ethereal Strokes Book",
      price: 2499,
      qty,
    },
  ]);
}

setIsCartOpen(true);
```

};

return ( <section
   id="collection"
   className="grid lg:grid-cols-2 gap-12 lg:gap-20 
              px-6 sm:px-10 md:px-16 lg:px-20 
              py-12 sm:py-16 lg:py-20 
              items-center"
 >
{/* 🔶 Image Slider Section */} <div className="relative mx-auto w-full max-w-md lg:max-w-none"> <div className="relative group transition-transform duration-500 lg:hover:scale-105">

```
      {/* Yellow Layer */}
      <div className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6
                      w-full h-full rounded-3xl bg-yellow-400 z-0"></div>

      {/* Image Container */}
      <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Image */}
        <img
          src={images[current]}
          alt="Product"
          className="w-full h-auto object-cover transition-all duration-500"
        />

        {/* ⬅️ Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 
                     bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ◀
        </button>

        {/* ➡️ Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 
                     bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ▶
        </button>
      </div>

      {/* 🔘 Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>

  {/* 🔶 Content Section */}
  <div className="text-center lg:text-left">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
      Ethereal Strokes: The Masterclass
    </h2>

    {/* Rating */}
    <div className="flex justify-center lg:justify-start items-center gap-2 mt-3 text-yellow-500">
      ⭐ ⭐ ⭐ ⭐ ⭐
      <span className="text-gray-600 text-sm">(128 Reviews)</span>
    </div>

    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-5">
      ₹2,499
    </p>

    <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
      This book is not the end of nail art—it is just the beginning. Learn
      Jasmeet's personal techniques developed over 5 years.
    </p>

    <div className="flex justify-center lg:justify-start mt-8">
      <div className="flex items-center border rounded-md overflow-hidden">
        <button
          onClick={() => qty > 1 && setQty(qty - 1)}
          className={`px-4 py-2 hover:bg-gray-100 transition cursor-pointer ${
            darkMode ? "dark:hover:bg-gray-300 hover:text-black" : ""
          }`}
        >
          −
        </button>
        <span className="px-6">{qty}</span>
        <button
          onClick={() => setQty(qty + 1)}
          className={`px-4 py-2 hover:bg-gray-100 transition cursor-pointer ${
            darkMode ? "dark:hover:bg-gray-300 hover:text-black" : ""
          }`}
        >
          +
        </button>
      </div>
    </div>

    {/* Add to Cart */}
    <button
      onClick={addToCart}
      className={`mt-8 w-full sm:w-auto lg:w-full
      px-10 py-4 rounded-md transition cursor-pointer duration-300
      ${
        darkMode
          ? "bg-white text-black hover:bg-yellow-400"
          : "bg-black text-white hover:bg-yellow-400 hover:text-black"
      }`}
    >
      Add to Cart
    </button>
  </div>
</section>
);
}

export default ProductSection;
