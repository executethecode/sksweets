import React, { useState, useEffect, useRef } from "react";
import sweetsImg from "../../images/sweets.jpg";

const images = [sweetsImg, sweetsImg, sweetsImg, sweetsImg, sweetsImg];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const expandedRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function openAt(i) {
    setIndex(i);
    setOpen(true);
  }

  function toggleExpanded() {
    setExpanded((e) => {
      const next = !e;
      if (next) {
        // scroll to expanded section after render
        setTimeout(
          () => expandedRef.current?.scrollIntoView({ behavior: "smooth" }),
          120,
        );
      }
      return next;
    });
  }

  return (
    <section id="gallery" className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif text-center mb-6">Our Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`gallery-${i}`}
            className="w-full h-40 object-cover rounded cursor-pointer"
            onClick={() => openAt(i)}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={toggleExpanded}
          className="bg-primary text-white px-6 py-2 rounded"
        >
          {expanded ? "Show Less" : "View More Photos"}
        </button>
      </div>

      {expanded && (
        <div ref={expandedRef} className="mt-8">
          <h3 className="text-xl font-semibold mb-4">More Photos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <img
                key={i}
                src={images[i % images.length]}
                alt={`more-${i}`}
                className="w-full h-44 object-cover rounded"
              />
            ))}
          </div>
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[index]}
              alt={`large-${index}`}
              className="w-full h-[60vh] object-contain rounded"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-white/80 rounded-full p-2"
            >
              ✕
            </button>
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setIndex((i) => Math.min(i + 1, images.length - 1))
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
