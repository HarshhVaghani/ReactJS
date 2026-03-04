import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FooterSection from "../component/FooterSection";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      category: "General",
      questions: [
        {
          id: "q1",
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy on all products. Items must be in original condition with all packaging. Please contact our customer service team to initiate a return.",
        },
        {
          id: "q2",
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to over 150 countries worldwide. Shipping costs and delivery times vary by location. You can view shipping options during checkout.",
        },
        {
          id: "q3",
          question: "How do I track my order?",
          answer:
            "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
        },
      ],
    },
    {
      id: 2,
      category: "Products",
      questions: [
        {
          id: "q4",
          question: "How do I know if a product is in stock?",
          answer:
            "Stock information is displayed on each product page. Items marked as 'In Stock' are available for immediate shipping.",
        },
        {
          id: "q5",
          question: "Can I pre-order out-of-stock items?",
          answer:
            "Yes, we offer pre-order options for most items. You'll be notified when the item is back in stock and your order will be shipped immediately.",
        },
        {
          id: "q6",
          question: "Are products authentic?",
          answer:
            "All products sold on our platform are 100% authentic. We work directly with manufacturers and authorized distributors.",
        },
      ],
    },
    {
      id: 3,
      category: "Payment & Security",
      questions: [
        {
          id: "q7",
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.",
        },
        {
          id: "q8",
          question: "Is my payment information secure?",
          answer:
            "Yes, we use industry-standard SSL encryption and PCI compliance to protect your payment information.",
        },
        {
          id: "q9",
          question: "Can I save my payment information?",
          answer:
            "Yes, you can securely save payment methods to your account for faster checkout on future purchases.",
        },
      ],
    },
    {
      id: 4,
      category: "Account & Orders",
      questions: [
        {
          id: "q10",
          question: "How do I create an account?",
          answer:
            "Click on the 'Login/Register' option in the top navigation and fill in your email and password. It's quick and free!",
        },
        {
          id: "q11",
          question: "Can I modify my order after placing it?",
          answer:
            "You can modify your order within 1 hour of purchase. After that, please contact customer support for assistance.",
        },
        {
          id: "q12",
          question: "How do I reset my password?",
          answer:
            "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
        },
      ],
    },
  ];

  const toggleItem = (itemId) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((section) => (
            <div key={section.id}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {section.category}
              </h2>

              <div className="space-y-3">
                {section.questions.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 text-left">
                        {item.question}
                      </h3>
                      <div
                        className={`flex-shrink-0 ml-4 transition-transform ${
                          openItems[item.id] ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={24} className="text-blue-600" />
                      </div>
                    </button>

                    {openItems[item.id] && (
                      <div className="px-6 py-4 bg-gray-50 border-t">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
