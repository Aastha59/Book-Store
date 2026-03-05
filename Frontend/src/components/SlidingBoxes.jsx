function SlidingBoxes({ darkMode }) {
  const texts = [
    "Nail Art never stands still.",
    "It grows, changes, and challenges us.",
    "Self-learning is essential.",
    "Observe, Practice, Experiment."
  ];

  // Repeat items 4 times for seamless loop
  const repeatedTexts = [...texts, ...texts, ...texts, ...texts];

  return (
    <section
      className={`overflow-hidden py-8 md:py-12 ${
        darkMode ? "bg-black" : "bg-gray-50"
      }`}
    >
      <div className="relative">

        {/* Moving Track */}
        <div className="flex gap-4 md:gap-10 animate-scroll hover:pause whitespace-nowrap">

          {repeatedTexts.map((text, index) => (
            <div
              key={index}
              className="relative min-w-max group transition-transform duration-300"
            >

              {/* Back Layer */}
              <div
                className={`absolute top-2 left-2 md:top-3 md:left-3 w-full h-full rounded-lg z-0 
                transition-colors duration-300
                ${
                  darkMode
                    ? "bg-yellow-400 group-hover:bg-white"
                    : "bg-yellow-400 group-hover:bg-black"
                }`}
              ></div>

              {/* Main Box */}
              <div
                className={`relative z-10 px-4 py-3 md:px-8 md:py-6 border-2 rounded-lg font-medium text-sm md:text-lg
                transition-all duration-300
                group-hover:scale-105
                max-w-[280px] md:max-w-none
                ${
                  darkMode
                    ? "bg-gray-900 text-white border-white"
                    : "bg-white text-black border-black"
                }`}
              >
                {text}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default SlidingBoxes;