
import React, { useState } from "react";

const rewards = [
  "+5p tăng trưởng",
  "+10p tăng trưởng",
  "+15p tăng trưởng",
  "+1 thức ăn tăng trứng",
  "+1 thuốc hồi sức",
  "+1 thức ăn giảm thời gian trưởng thành",
];

function getRandomReward() {
  const index = Math.floor(Math.random() * rewards.length);
  return rewards[index];
}

export default function SpinPage() {
  const [hasSpun, setHasSpun] = useState(false);
  const [reward, setReward] = useState(null);

  const handleSpin = () => {
    if (!hasSpun) {
      const result = getRandomReward();
      setReward(result);
      setHasSpun(true);
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">🎡 Vòng Quay May Mắn</h2>
      <p className="mb-6 text-gray-600">Điểm danh đủ 7 ngày để quay 1 lần.</p>

      <button
        onClick={handleSpin}
        disabled={hasSpun}
        className="px-6 py-3 bg-purple-600 text-white text-lg rounded-xl disabled:bg-gray-400"
      >
        {hasSpun ? "Đã quay" : "Quay ngay"}
      </button>

      {reward && (
        <div className="mt-6 p-4 bg-yellow-100 rounded-xl text-lg font-semibold">
          🎁 Bạn nhận được: {reward}!
        </div>
      )}
    </div>
  );
}
