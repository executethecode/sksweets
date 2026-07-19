import React from "react";

const items = [
  "Premium Quality Ingredients",
  "Traditional Recipes",
  "Hygienic & Clean Preparation",
  "Freshly Made Everyday",
  "Beautiful Packaging",
  "Customer Satisfaction",
];

export default function WhyChoose() {
  return (
    <section className="bg-primary text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-serif text-center mb-6">
          Why Choose SK Sweets?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          {items.map((it, idx) => (
            <div key={idx} className="p-4">
              <div className="text-sm">{it}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
