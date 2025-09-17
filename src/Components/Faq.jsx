// FAQ.jsx
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is the return policy for items purchased online?",
    answer:
      "You can return most items within 30 days of purchase, provided they are unused and in original packaging. Refunds are processed within 5-7 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping costs and delivery times may vary depending on the destination.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! Once your order is shipped, you will receive a tracking link via email.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, UPI, Netbanking, and wallets like Paytm & Google Pay.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Domestic orders usually take 3–7 business days. International shipping may take 10–15 days.",
  },
  {
    question: "Can I cancel or change my order after placing it?",
    answer:
      "Yes, orders can be modified or cancelled within 24 hours of placement by contacting our support.",
  },
  {
    question: "Do you offer discounts or promo codes?",
    answer:
      "Yes, we frequently run promotions. Subscribe to our newsletter to stay updated on the latest offers.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f2eb] py-12 px-4 sm:px-6 md:px-10">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
        Frequently Asked Questions
      </h2>

      {/* FAQ Box */}
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 sm:p-5"
          >
            {/* Header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              ) : (
                <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              )}
            </div>

            {/* Animated Content */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-48 mt-3 sm:mt-4" : "max-h-0"
              }`}
            >
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
