import StorySection from "../components/StorySection";

function Story({ darkMode }) {
  return (
    <div className="min-h-screen pt-8">
      <div className="text-center mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Our Journey</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          From humble beginnings to empowering nail artists worldwide
        </p>
      </div>
      <StorySection darkMode={darkMode} />
    </div>
  );
}

export default Story;