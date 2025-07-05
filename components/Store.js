
import React, { useState } from 'react';

export default function Store() {
  const [visible, setVisible] = useState(false);

  const items = [
    { name: 'Feed', price: 1 },
    { name: 'Fast Grow +6h', price: 2 },
    { name: 'Fast Grow +12h', price: 3 },
    { name: 'Egg Boost -4h', price: 2 },
    { name: 'Egg Boost -8h', price: 3 },
    { name: 'Health +50', price: 5 }
  ];

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setVisible(!visible)}
        className="bg-yellow-500 text-white p-2 rounded-full shadow-xl"
      >
        🛒
      </button>
      {visible && (
        <div className="absolute bottom-12 right-0 w-64 bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Store</h2>
          <ul>
            {items.map((item, idx) => (
              <li key={idx} className="flex justify-between border-b py-1">
                <span>{item.name}</span>
                <span>{item.price} Pi</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
