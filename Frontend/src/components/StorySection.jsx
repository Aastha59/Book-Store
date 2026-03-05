function StorySection({ darkMode }) {
  return (
    <section
      id="journey"
      className={`px-6 md:px-16 lg:px-24 py-12 transition-colors duration-300
      ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* 🔶 LEFT CONTENT */}
        <div className="space-y-10">

          {/* Card 1 */}
          <div>
            <div
              className={`p-6 md:p-8 clip-right
              ${darkMode ? "bg-gray-900 text-white" : "bg-black text-white"}`}
            >
              <h3 className="text-lg md:text-xl font-semibold">
                The Beginning (2020)
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-400">
                Started from a small table during COVID with nothing but hope.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <div
              className={`p-6 md:p-8 clip-left
              ${darkMode ? "bg-yellow-500 text-black" : "bg-yellow-400 text-black"}`}
            >
              <h3 className="text-lg md:text-xl font-semibold">
                Her Strength
              </h3>
              <p className="mt-2 text-sm md:text-base">
                Protector and 'younger mother' to her brother with cerebral palsy.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <div
              className={`p-6 md:p-8 clip-right
              ${darkMode ? "bg-gray-900 text-white" : "bg-black text-white"}`}
            >
              <h3 className="text-lg md:text-xl font-semibold">
                2026 Vision
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-400">
                From a small table to a name, a business, and a voice.
              </p>
            </div>
          </div>

        </div>

        {/* 🔶 RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="story-image w-[280px] sm:w-[350px] md:w-[420px] lg:w-[350px]">
            <img
              src="IMG_5897.JPG.jpeg"
              alt="Founder"
            />
          </div>
        </div>



      </div>
    </section>
  );
}

export default StorySection;
