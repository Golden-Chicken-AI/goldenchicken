
import React, { useState } from "react";
import itemsData from "../data/shopItems";

function ShopPage() {
  const [inventory, setInventory] = useState({});
  const [balance, setBalance] = useState(100); // Giả lập số Pi người chơi đang có

  const buyItem = (itemId, quantity) => {
    const item = itemsData.find((i) => i.id === itemId);
    if (!item) return;

    let total = item.price * quantity;
    let bonus = 0;

    if (quantity === 5 || quantity === 10) {
      bonus = 1;
    }

    if (balance < total) {
      alert("Không đủ Pi!");
      return;
    }

    setBalance(balance - total);

    setInventory((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + quantity + bonus,
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Cửa hàng</h2>
      <p className="mb-4">💰 Pi hiện có: {balance.toFixed(2)}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {itemsData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 shadow rounded-2xl flex flex-col"
          >
            <h3 className="text-lg font-bold mb-1">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.description}</p>
            <p className="mb-2">💸 Giá: {item.price} Pi</p>

            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => buyItem(item.id, 1)}
                className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm"
              >
                Mua 1
              </button>
              <button
                onClick={() => buyItem(item.id, 5)}
                className="bg-green-500 text-white px-3 py-1 rounded-xl text-sm"
              >
                Mua 5 +1 🎁
              </button>
              <button
                onClick={() => buyItem(item.id, 10)}
                className="bg-purple-500 text-white px-3 py-1 rounded-xl text-sm"
              >
                Mua 10 +1 🎁
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
