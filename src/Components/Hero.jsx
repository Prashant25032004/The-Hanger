// Home.jsx
import React from "react";
import Products from "./Products";
import FAQ from "./Faq";
import Features from "./Features";

const Home = () => {
  return (
    <>
      <div className="font-[Gilroy] bg-[#EBE8E3]">
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] sm:h-[26vw] mt-8 flex flex-col md:flex-row 
          items-center justify-between px-4 sm:px-6 md:px-16 
          bg-gradient-to-r from-[#e6d2b5] via-[#f4eee6] to-[#e6d2b5] 
          rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Floating Abstract Shape (left) */}
          <div className="absolute -top-28 -left-28 w-52 sm:w-72 h-52 sm:h-72 bg-[#d1b28a] rounded-full blur-[100px] opacity-40"></div>

          {/* Floating Abstract Shape (right) */}
          <div className="absolute -bottom-28 -right-28 w-64 sm:w-96 h-64 sm:h-96 bg-[#c19a6b] rounded-full blur-[120px] opacity-30"></div>

          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left mt-10 relative z-10 px-2">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Elevate Your Style <br /> This{" "}
              <span className="text-[#b8945e]">Festival</span>
            </h2>

            {/* Rating */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="flex text-yellow-500 text-base sm:text-lg">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                4.9 | 9,000+ Reviews
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Discover the latest wardrobe essentials crafted for comfort and
              elegance. Designed to make every moment special.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
            {/* Glow behind image */}
            <div className="absolute w-[240px] sm:w-[320px] md:w-[520px] h-[240px] sm:h-[320px] md:h-[520px] rounded-full bg-[#e0c7a7] blur-3xl opacity-60 top-1/2 -translate-y-1/2"></div>

            <img
              src="./girl.png"
              alt="shopping girl"
              className="w-full max-w-[220px] sm:max-w-[320px] md:max-w-[520px] object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
        </section>
      </div>

      {/* Products & FAQ */}
      <Products />
      <Features />
      <FAQ />
    </>
  );
};

export default Home;
