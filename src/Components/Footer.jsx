// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="relative text-white pt-6 h-fit bg-[#b8945e] overflow-hidden">
      {/* Big Watermark Text */}
      <h1 className="absolute bottom-0 left-0 text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] leading-none text-[#D9C4AA] font-[Gilroy] ml-2 sm:ml-3 font-semibold opacity-40 pointer-events-none select-none">
        THE HANGER
      </h1>

      {/* Content */}
      <div className="relative z-10">
        <div
          className="max-w-7xl mx-auto grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-5 
          gap-8 sm:gap-10 px-4 sm:px-6 md:px-12 sm:py-6 md:py-12"
        >
          {/* Address Section */}
          <div className="col-span-1 sm:col-span-2">
            <p className="mb-2 text-sm sm:text-base">
              1810 Stone Canyon Rd Longmont, <br />
              Colorado(CO), 80503
            </p>
            <p className="mb-6 text-sm sm:text-base">Info@gmail.com</p>
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Signup for 10% off your first order
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <input
                type="email"
                placeholder="Enter email here"
                className="py-2 px-3 w-full bg-white rounded-lg text-black outline-none text-sm sm:text-base"
              />
              <button className="bg-white text-[#b8945e] rounded-lg px-6 py-2 font-medium hover:bg-[#e2e2e2] transition text-sm sm:text-base">
                Submit
              </button>
            </div>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="font-semibold mb-3 text-base sm:text-lg">Pages</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Home</li>
              <li>Home 2</li>
              <li>Shop</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="font-semibold mb-3 text-base sm:text-lg">Info</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Legal</li>
              <li>Style Guide</li>
              <li>Licenses</li>
              <li>Changelog</li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="font-semibold mb-3 text-base sm:text-lg">Social</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-xs sm:text-sm mt-8 sm:mt-10 relative z-10">
          © {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-semibold">The Hanger Store</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
