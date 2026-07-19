import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import About from "./components/About";
import Signature from "./components/Signature";
import WhyChoose from "./components/WhyChoose";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import OrderModal from "./components/OrderModal";

export default function App() {
  const [orderOpen, setOrderOpen] = useState(false);
  const openOrder = () => setOrderOpen(true);
  const closeOrder = () => setOrderOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOrderClick={openOrder} />
      <main className="flex-1">
        <Hero onOrderClick={openOrder} />
        <section className="container mx-auto px-6 py-10">
          <Categories />
          <About />
          <Signature />
        </section>
        <WhyChoose />
        <Gallery />
        <CTA onOrderClick={openOrder} />
        <section className="container mx-auto px-6 py-8">
          <Testimonials />
        </section>
      </main>
      <Footer />
      <OrderModal open={orderOpen} onClose={closeOrder} />
    </div>
  );
}
