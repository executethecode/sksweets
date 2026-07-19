import React from "react";
import sweetsImg from '../../images/sweets.jpg'

const items = [
  {
    title: "Traditional Mithai",
    subtitle: "Taste of Tradition",
    img: sweetsImg,
  },
  {
    title: "Bengali Sweets",
    subtitle: "Authentic & Soft",
    img: sweetsImg,
  },
  {
    title: "Dry Fruit Sweets",
    subtitle: "Rich & Premium",
    img: sweetsImg,
  },
  {
    title: "Gift Boxes",
    subtitle: "Perfect for Gifting",
    img: sweetsImg,
  },
  {
    title: "Namkeen",
    subtitle: "Crispy & Delicious",
    img: sweetsImg,
  },
];

export default function Categories() {
  return (
    <section id="sweets" className="mt-10">
      <h2 className="text-2xl font-serif text-center mb-6">
        Our Special Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={it.img}
              alt={it.title}
              className="h-36 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm text-gray-500">{it.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
