
import React, { useState } from "react";
import itemsData from "../data/shopItems";

function InventoryPage() {
  const [inventory, setInventory] = useState({
    "food-basic": 3,
    "heal": 2,
    "growth-6h": 1,
  });

  const useItem = (itemId) => {
    if (!inventory[itemId] || inventory[itemId] <= 0) {
      alert("Bạn không có vật phẩm này!");
      return;
    }

    setInventory((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));

    // Gắn logic hiệu ứng ở đây (hiện tại chỉ console)
    const item = itemsData.find((i) => i.id === itemId);
    console.log(`Đã dùng vật phẩm: ${item?.name}`);
  };

  const inventoryItems = itemsData.filter((item) =>
    inventory[item.id] && inventory[item.id] > 0
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎒 Túi đồ</h2>

      {inventoryItems.length === 0 ? (
        <p>📭 Không có vật phẩm nào trong túi đồ.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {inventoryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow rounded-2xl flex flex-col"
            >
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="mt-2">📦 Số lượng: {inventory[item.id]}</p>

              <button
                onClick={() => useItem(item.id)}
                className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm"
              >
                🧪 Dùng
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InventoryPage;
