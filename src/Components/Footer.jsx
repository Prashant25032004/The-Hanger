// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white pt-12 h-fit bg-[#b8945e]">
      <div className="max-w-7xl  p-12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        
        {/* Address Section */}
        <div>
          <p className="mb-2">
            1810 Stone Canyon Rd Longmont, <br />
            Colorado(CO), 80503
          </p>
          <p className="mb-6">Info@gmail.com</p>
          <h3 className="font-semibold mb-2">
            Signup for 10% off your first order
          </h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter email here"
              className="py-1 px-3 w-full bg-white rounded-lg text-black outline-none"
            />
            <button className="bg-white text-[#b8945e] rounded-xl px-6 font-medium">
              Submit
            </button>
          </div>
        </div>

        {/* Pages Section */}
        <div className="">
          <h3 className="font-semibold mb-3 ">Pages</h3>
          <ul className="space-y-2 ">
            <li>Home</li>
            <li>Home 2</li>
            <li>Shop</li>
            <li>About</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Info Section */}
        <div>
          <h3 className="font-semibold mb-3">Info</h3>
          <ul className="space-y-2">
            <li>Legal</li>
            <li>Style Guide</li>
            <li>Licenses</li>
            <li>Changelog</li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-semibold mb-3">Social</h3>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-10 ">
        © All rights reserved by prahsant "voh ek gandu hai"
      </div>
    </footer>
  );
};

export default Footer;
