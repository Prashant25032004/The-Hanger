// Features.jsx
import { Truck, DollarSign, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-[#b8945e]" />,
    title: "Ship It Free",
    desc: "Free delivery on all qualifying orders, straight to your door.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#b8945e]" />,
    title: "Money-Back Guarantee",
    desc: "Return your item for a full refund if it doesn’t meet your expectations.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-[#b8945e]" />,
    title: "24/7 Customer Support",
    desc: "Our team is available 24/7 to address your inquiries.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#b8945e]" />,
    title: "Safe Checkout",
    desc: "Your payment details are always protected with advanced security.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#F8F6F2] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="p-4 bg-[#f0eae2] rounded-full flex items-center justify-center mb-4">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
