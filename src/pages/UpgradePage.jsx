
import React, { useState } from "react";

function UpgradePage() {
  const [slots, setSlots] = useState(3); // Mặc định có 3 ổ
  const [balance, setBalance] = useState(100); // Pi giả lập
  const maxSlots = 30;

  // Công thức giá mở rộng: 5 * (1 + i * 0.25)
  const calculatePrice = (i) => {
    return parseFloat((5 * (1 + i * 0.25)).toFixed(2));
  };

  const nextSlotIndex = slots - 3; // vì mặc định đã có 3

  const price = calculatePrice(nextSlotIndex);

  const upgrade = () => {
    if (slots >= maxSlots) return;
    if (balance < price) {
      alert("Không đủ Pi để nâng cấp!");
      return;
    }

    setSlots(slots + 1);
    setBalance(balance - price);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏚️ Nâng cấp chuồng</h2>
      <p className="mb-2">📦 Số ổ hiện tại: {slots} / {maxSlots}</p>
      <p className="mb-4">💰 Pi hiện có: {balance.toFixed(2)}</p>

      {slots < maxSlots ? (
        <div className="bg-white p-4 shadow rounded-xl">
          <p className="mb-2">
            Mở thêm 1 ổ gà → Giá: <strong>{price} Pi</strong>
          </p>
          <button
            onClick={upgrade}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl"
          >
            🔓 Mở khóa ổ mới
          </button>
        </div>
      ) : (
        <p className="text-green-600 font-semibold">✅ Đã nâng cấp tối đa!</p>
      )}
    </div>
  );
}

export default UpgradePage;
