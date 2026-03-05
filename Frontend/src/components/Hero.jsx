import { useEffect, useState } from "react";

const images = ["1.avif", "2.avif", "3.avif", "4.avif"];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // ⬅ Slower change (6s)

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🔥 Smooth Crossfade Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Hero"
          className={`absolute w-full h-full object-cover object-center
            transition-all duration-[2000ms] ease-in-out
            ${i === index
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
            }`}
        />
      ))}

      {/* Content */}
      <div className="relative text-center px-6 sm:px-10">
        <h1 className="text-5xl lg:text-8xl font-serif font-bold leading-tight">
          Beauty feeds <br />
          <span className="text-yellow-400 italic">
            the soul.
          </span>
        </h1>

        <button
          onClick={() =>
            document
              .getElementById("collection")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 
                     bg-black text-yellow-400 
                     hover:bg-yellow-400 hover:text-black 
                     transition duration-300 
                     rounded-md cursor-pointer hover:scale-105"
        >
          Discover the Guide
        </button>
      </div>
    </section>
  );
}

export default Hero;
