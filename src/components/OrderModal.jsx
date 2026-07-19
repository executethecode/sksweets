import React, { useState, useEffect, useRef } from "react";

const sweetsOptions = [
  "Rasgulla",
  "Kaju Katli",
  "Gulab Jamun",
  "Motichoor Laddu",
  "Kheer",
  "Barfi",
];

export default function OrderModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [items, setItems] = useState(() =>
    sweetsOptions.map((s) => ({ name: s, qty: "", selected: false })),
  );
  const [visible, setVisible] = useState(false);
  const firstInput = useRef(null);

  useEffect(() => {
    if (open) {
      // small delay so CSS transition runs
      requestAnimationFrame(() => setVisible(true));
      setTimeout(() => firstInput.current?.focus(), 50);
      const onKey = (e) => {
        if (e.key === "Escape") handleClose();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    } else {
      setVisible(false);
    }
  }, [open]);

  function toggleSelect(index) {
    setItems((prev) =>
      prev.map((it, i) =>
        i === index ? { ...it, selected: !it.selected } : it,
      ),
    );
  }

  function setQty(index, val) {
    setItems((prev) =>
      prev.map((it, i) => (i === index ? { ...it, qty: val } : it)),
    );
  }

  function handleClose() {
    setVisible(false);
    // wait for animation to finish
    setTimeout(() => onClose(), 200);
  }

  function submit() {
    if (!name || !phone || !address) {
      alert("Please enter name, mobile number and delivery address");
      return;
    }
    const selected = items.filter((i) => i.selected);
    if (selected.length === 0) {
      alert("Please choose at least one sweet");
      return;
    }

    const itemsText = selected
      .map((it) => `- ${it.name}: ${it.qty || "1"}`)
      .join("\n");

    const message = `New order from SK Sweets website\n\nName: ${name}\nMobile: ${phone}\nItems:\n${itemsText}\n\nDelivery address: ${address}\n\nThank you!`;

    const payload = encodeURIComponent(message);
    // Use api.whatsapp.com/send which is broadly compatible
    const waApi = `https://api.whatsapp.com/send?phone=917761856854&text=${payload}`;
    // fallback to wa.me if needed
    const waShort = `https://wa.me/917761856854?text=${payload}`;
    try {
      window.open(waApi, "_blank");
    } catch (e) {
      window.open(waShort, "_blank");
    }
    handleClose();
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-white w-full md:max-w-2xl rounded-t-xl md:rounded-lg p-4 md:p-6 transform transition-all duration-200 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Quick Order</h3>
          <button onClick={handleClose} className="text-gray-500">
            Close
          </button>
        </div>

        <div className="grid gap-3">
          <input
            ref={firstInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="border p-2 rounded w-full"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mobile number"
            className="border p-2 rounded w-full"
          />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Delivery address (required)"
            required
            aria-required="true"
            className="border p-2 rounded w-full"
          />

          <div className="grid gap-2">
            {items.map((it, idx) => (
              <div key={it.name} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={it.selected}
                  onChange={() => toggleSelect(idx)}
                />
                <div className="flex-1">{it.name}</div>
                <input
                  placeholder="kg or gms (e.g. 1kg/250g)"
                  value={it.qty}
                  onChange={(e) => setQty(idx, e.target.value)}
                  className="border p-1 rounded w-36 md:w-48"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-end gap-3 mt-4">
            <button onClick={handleClose} className="px-4 py-2 border rounded">
              Cancel
            </button>
            <button
              onClick={submit}
              className="px-4 py-2 bg-gold text-white rounded"
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
