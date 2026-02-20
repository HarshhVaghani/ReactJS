const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Contact Us</h1>


      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-xl font-semibold mb-3">Reach Us</h2>
          <p className="text-gray-600">Surat, Gujarat</p>
          <p className="text-gray-600">harshvaghani.in</p>
          <p className="text-gray-600">+91 8980809800</p>
        </div>

        <form className="bg-white p-6 rounded-xl shadow-md max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-2 border rounded"
          ></textarea>
          <button className="bg-[#4F46E5] text-white px-4 py-2 rounded hover:bg-indigo-700">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;