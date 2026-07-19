import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="container mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-2xl font-serif">SK Sweets</div>
          <p className="text-sm mt-2">
            Spreading sweetness since 1998. Thank you for making us a part of
            your celebrations.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Sweets</li>
            <li>Contact</li>
          </ul>
        </div>
        <div id="contact">
          <h4 className="font-semibold mb-2">Contact Info</h4>
          <p className="text-sm">Barahima More, District Gopalganj</p>
          <p className="text-sm">Director: Samsher Babu</p>
          <p className="text-sm mt-2">Phone: +91 77618 56854</p>
          <p className="text-sm mt-2">info@sksweets.com</p>
        </div>
      </div>
      <div className="text-center text-sm bg-black/10 py-4">
        © 2026 SK Sweets. All Rights Reserved. • Branding made by Mr.Ali with ❤️
      </div>
    </footer>
  );
}
