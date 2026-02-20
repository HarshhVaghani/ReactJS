const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        
        <h2 className="text-lg font-semibold text-white">Navigator</h2>

        <p className="text-sm mt-2 md:mt-0">
          © 2026 Navigator. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm mt-2 md:mt-0">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;