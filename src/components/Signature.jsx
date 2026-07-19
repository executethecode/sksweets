import React from "react";
import sweetsImg from "../../images/sweets.jpg";

const sweets = [
  { name: "Rasgulla", img: sweetsImg },
  { name: "Kaju Katli", img: sweetsImg },
  { name: "Gulab Jamun", img: sweetsImg },
  { name: "Motichoor Laddu", img: sweetsImg },
];

export default function Signature() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-serif text-center mb-6">
        Our Signature Sweets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sweets.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4"
          >
            <img
              src={s.img}
              alt={s.name}
              className="h-36 w-full object-cover rounded"
            />
            <h4 className="mt-3 font-semibold">{s.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
