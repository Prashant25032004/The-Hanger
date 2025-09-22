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
    <section className="bg-[#F8F6F2] py-16 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Got questions? We’ve got answers.
        </p>
      </div>

      {/* FAQ Box */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Header */}
            <div
              className="flex justify-between items-center p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Plus className="w-6 h-6 text-gray-700" />
              )}
            </div>

            {/* Animated Content */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden px-5 ${
                openIndex === index ? "max-h-40 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
