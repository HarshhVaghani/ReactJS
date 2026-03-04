import { Users, Award, Globe, Heart } from "lucide-react";
import FooterSection from "../component/FooterSection";

export default function AboutUsPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize customer satisfaction in everything we do.",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "Only the best products from trusted manufacturers.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Delivering excellence to customers worldwide.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a community of satisfied customers.",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "https://via.placeholder.com/200x200?text=John",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Operating Officer",
      image: "https://via.placeholder.com/200x200?text=Sarah",
    },
    {
      name: "Michael Chen",
      role: "Head of Products",
      image: "https://via.placeholder.com/200x200?text=Michael",
    },
    {
      name: "Emily Davis",
      role: "Customer Success Lead",
      image: "https://via.placeholder.com/200x200?text=Emily",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100">
            Bringing quality products and exceptional service to customers worldwide
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Founded in 2020, Blueberry E-Commerce has grown from a small startup
              to a trusted online marketplace serving customers across the globe.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our mission is simple: provide high-quality products at competitive
              prices while delivering exceptional customer service. We believe that
              everyone deserves access to premium products without breaking the bank.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Over the years, we've built strong relationships with manufacturers,
              suppliers, and most importantly, our customers. This foundation has
              allowed us to continuously improve and expand our offerings.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x400?text=Our+Story"
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-lg">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-lg">Products Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-lg">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <p className="text-lg">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-3">Wide Selection</h3>
              <p className="text-gray-600">
                Browse through thousands of quality products across various categories.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Get the best prices without compromising on quality or authenticity.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-3">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick and reliable shipping options to deliver your orders on time.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-3">Secure Payments</h3>
              <p className="text-gray-600">
                Your payment information is protected with the latest security standards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer support team is always ready to help with any questions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-3">Easy Returns</h3>
              <p className="text-gray-600">
                Hassle-free returns within 30 days if you're not satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
