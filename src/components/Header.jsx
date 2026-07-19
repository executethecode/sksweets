import React from "react";

export default function Header({ onOrderClick }) {
  return (
    <header className="bg-cream shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-serif text-primary">SK Sweets</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="text-gray-700">
              Home
            </a>
            <a href="#about" className="text-gray-700">
              About Us
            </a>
            <a href="#sweets" className="text-gray-700">
              Sweets
            </a>
            <a href="#gallery" className="text-gray-700">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="#sweets" className="bg-gold text-white px-4 py-2 rounded-md">
            Explore Sweets
          </a>
          <button
            onClick={onOrderClick}
            className="border border-primary text-primary px-4 py-2 rounded-md"
          >
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
}
