import React from "react";

export default function CTA({ onOrderClick }) {
  return (
    <section className="bg-cream py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-serif">Celebrate Every Festival</h3>
          <p className="text-gray-600">
            Diwali · Holi · Eid · Raksha Bandhan · Weddings & More
          </p>
        </div>
        <div>
          <button
            onClick={onOrderClick}
            className="bg-gold text-white px-6 py-3 rounded"
          >
            Order Now For Festivals
          </button>
        </div>
      </div>
    </section>
  );
}
