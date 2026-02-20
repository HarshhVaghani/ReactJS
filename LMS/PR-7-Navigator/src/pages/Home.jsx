const Home = () => {
  return (
    <div>

      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#4F46E5] mb-4">
          Build Modern React Apps
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn routing, layouts, dynamic pages and SPA architecture with this Navigator project.
        </p>

        <button className="mt-6 bg-[#4F46E5] text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-lg mb-2">Routing</h3>
          <p className="text-gray-600">Understand navigation using React Router.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-lg mb-2">Layouts</h3>
          <p className="text-gray-600">Reusable UI structure across pages.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-lg mb-2">Dynamic Pages</h3>
          <p className="text-gray-600">Create product-based routes dynamically.</p>
        </div>
      </section>

    </div>
  );
};

export default Home;