const Services = () => {
  return (
    <div>
      <p className="text-gray-600 mb-8">
        We provide modern web development and design solutions using the latest technologies.
      </p>
      <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-[#0F172A]">
            Web Development
          </h2>
          <p className="text-gray-600">Modern scalable applications.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-[#0F172A]">
            UI/UX Design
          </h2>
          <p className="text-gray-600">Clean & user-friendly interfaces.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-[#0F172A]">
            Consulting
          </h2>
          <p className="text-gray-600">Technical guidance for projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;