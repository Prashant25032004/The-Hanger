// Home.jsx
import React from "react";
import Products from "./Products";
import FAQ from "./Faq";

const Home = () => {
  return (
    <>
      <div className="font-[Gilroy] bg-[#EBE8E3]">
        {/* Hero Section */}
        <section className="bg-[#d9c4aa] min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-16 gap-8">
          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Up to 40% Off for <br /> the Festival Season
            </h2>

            {/* Rating */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="flex text-yellow-500">
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
            <p className="text-gray-700 text-sm sm:text-base">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle.
            </p>

            {/* Button */}
            <button className="bg-black text-white px-6 py-2 mt-4 hover:bg-gray-800 transition">
              Shop now!
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="./girl.png"
              alt="shopping girl"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain"
            />
          </div>
        </section>

        {/* Shipping Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white px-6 md:px-12 py-4 text-xs sm:text-sm text-center sm:text-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3082/3082027.png"
            alt="truck"
            className="w-5 h-5"
          />
          <p className="text-gray-800">
            <span className="font-semibold">Free Worldwide Shipping:</span> get
            free shipping with our Special service and not redeemable for cash or
            credit{" "}
            <span className="text-[#b58b3a] underline cursor-pointer">
              See Details
            </span>
          </p>
        </div>
      </div>

      {/* Products & FAQ */}
      <Products />
      <FAQ />
    </>
  );
};

export default Home;
