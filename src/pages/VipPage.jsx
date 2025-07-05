
import React, { useState } from "react";

const vipLevels = [
  { level: 1, required: 100 },
  { level: 2, required: 300 },
  { level: 3, required: 600 },
  { level: 4, required: 1000 },
  { level: 5, required: 1500 },
];

export default function VipPage() {
  const [totalSpent, setTotalSpent] = useState(250); // giả lập

  const currentVip = vipLevels
    .slice()
    .reverse()
    .find((vip) => totalSpent >= vip.required) || { level: 0 };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔐 Hệ Thống VIP</h2>
      <p className="mb-2">💸 Tổng Pi đã chi tiêu: {totalSpent} Pi</p>
      <p className="mb-4 font-semibold text-green-600">
        ⭐ Cấp VIP hiện tại: VIP {currentVip.level}
      </p>

      <div className="space-y-4">
        {vipLevels.map((vip) => (
          <div
            key={vip.level}
            className={`p-4 rounded-xl border ${
              totalSpent >= vip.required ? "border-amber-500 bg-amber-50" : "border-gray-200"
            }`}
          >
            <div className="font-semibold">🎖️ VIP {vip.level}</div>
            <div className="text-sm text-gray-600">
              Yêu cầu chi tiêu: {vip.required} Pi
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
