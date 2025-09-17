// Products.jsx
import React from "react";

const Products = () => {
  const items = [
    {
      id: 1,
      title: "Hojudo women's high waist side",
      price: "₹3,599",
      oldPrice: "₹3,599",
      img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg",
    },
    {
      id: 2,
      title: "Men's regular casual trousers",
      price: "₹5,499",
      oldPrice: "₹5,499",
      img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
    },
    {
      id: 3,
      title: "Men dark pink plain night suit",
      price: "₹4,299",
      oldPrice: "₹4,299",
      img: "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg",
    },
    {
      id: 4,
      title: "Women's regular fit 100% cotton",
      price: "₹2,999",
      oldPrice: "₹2,999",
      img: "https://images.pexels.com/photos/7679464/pexels-photo-7679464.jpeg",
    },
    {
      id: 5,
      title: "Classic men's beige trench coat",
      price: "₹6,499",
      oldPrice: "₹7,199",
      img: "https://images.pexels.com/photos/7679465/pexels-photo-7679465.jpeg",
    },
    {
      id: 6,
      title: "Women's stylish leather jacket",
      price: "₹7,999",
      oldPrice: "₹8,499",
      img: "https://images.pexels.com/photos/7679466/pexels-photo-7679466.jpeg",
    },
    {
      id: 7,
      title: "Men's slim fit denim jeans",
      price: "₹3,799",
      oldPrice: "₹4,199",
      img: "https://images.pexels.com/photos/7679467/pexels-photo-7679467.jpeg",
    },
    {
      id: 8,
      title: "Women's floral summer dress",
      price: "₹4,899",
      oldPrice: "₹5,299",
      img: "https://images.pexels.com/photos/7679468/pexels-photo-7679468.jpeg",
    },
  ];

  return (
    <div className="bg-[#f8f6f2] py-12">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        Just restocked
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6">
        {items.map((item) => (
          <div key={item.id} className="text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full aspect-[3/4] object-cover rounded-lg shadow-sm"
            />
            <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base font-medium text-black">
              {item.price}
            </p>
            <p className="line-through text-gray-400 text-sm sm:text-base">
              {item.oldPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
