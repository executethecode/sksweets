import React from "react";
import sweetsImg from "../../images/sweets.jpg";

export default function Hero({ onOrderClick }) {
  return (
    <section id="home" className="relative">
      <div
        className="h-[520px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${sweetsImg})` }}
      >
        <div className="h-full w-full hero-overlay flex items-center">
          <div className="container mx-auto px-6 text-white">
            <h3 className="text-gold uppercase tracking-widest mb-4">
              Tradition · Quality · Purity
            </h3>
            <h1 className="text-5xl font-serif font-bold mb-4">
              Welcome to
              <span className="text-gold ml-3">SK SWEETS</span>
            </h1>
            <p className="max-w-lg mb-6">
              Delicious sweets made with pure ingredients for every celebration
              of your life.
            </p>
            <div className="flex gap-4">
              <a
                href="#sweets"
                className="bg-gold text-white px-6 py-3 rounded-md"
              >
                Explore Sweets
              </a>
              <button
                onClick={onOrderClick}
                className="border border-white px-6 py-3 rounded-md"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
