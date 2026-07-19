import React from "react";

const quotes = [
  {
    text: "The best sweets in town! Always fresh and full of authentic flavor.",
    author: "Priya Sharma",
  },
  {
    text: "We ordered for a wedding and everyone loved the taste and packaging.",
    author: "Rahul Verma",
  },
  {
    text: "Pure ingredients, amazing taste and excellent service.",
    author: "Anjali Mehta",
  },
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-2xl font-serif text-center mb-6">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <p className="text-gray-700 mb-4">“{q.text}”</p>
            <div className="text-sm font-semibold">— {q.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
