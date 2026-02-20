const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">About Navigator</h1>

      <p className="text-gray-700 mb-8">
        Navigator is a learning-focused React project designed to help students understand modern routing and SPA architecture.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
          <p>Help beginners master React routing concepts.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
          <p>Build industry-ready React developers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;