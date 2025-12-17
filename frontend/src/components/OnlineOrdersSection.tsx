"use client";

export default function OnlineOrdersSection() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-[#2d2d2d] mb-4">Online Orders</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nombre completo" required className="border rounded px-4 py-2" />
        <input type="email" placeholder="Correo electrónico" required className="border rounded px-4 py-2" />
        <input type="tel" placeholder="Teléfono" required className="border rounded px-4 py-2" />
        <input type="text" placeholder="Producto o servicio" required className="border rounded px-4 py-2" />
        <textarea placeholder="Detalles del pedido" required className="border rounded px-4 py-2 min-h-[80px]" />
        <button type="submit" className="bg-[#1a4d3a] text-white px-6 py-2 rounded font-bold hover:bg-[#2d6a4f] transition">Comprar</button>
      </form>
    </div>
  );
} 