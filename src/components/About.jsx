import React from "react";
import sweetsImg from "../../images/sweets.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="mt-12 grid md:grid-cols-2 gap-8 items-center"
    >
      <img src={sweetsImg} alt="shop" className="rounded-lg shadow-lg" />
      <div>
        <h3 className="text-xl font-serif mb-3">A Legacy of Taste & Trust</h3>
        <p className="text-gray-600 mb-4">
          At SK Sweets, we have been spreading sweetness since 1998. Every sweet
          is crafted with love using the finest ingredients and traditional
          recipes. Our commitment to quality and hygiene has made us a trusted
          name for generations.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">
            100% Pure Ingredients
          </div>
          <div className="p-4 bg-white rounded shadow">
            Hygienically Prepared
          </div>
          <div className="p-4 bg-white rounded shadow">
            Freshly Made Everyday
          </div>
          <div className="p-4 bg-white rounded shadow">20+ Years of Trust</div>
        </div>
        <button className="mt-6 bg-primary text-white px-5 py-2 rounded">
          Know More About Us
        </button>
      </div>
    </section>
  );
}
