
import React, { useState } from "react";

const dailyQuests = [
  { id: 1, description: "Đăng nhập hôm nay", reward: "+5p tăng trưởng" },
  { id: 2, description: "Cho ăn 1 bữa", reward: "+10p tăng trưởng" },
  { id: 3, description: "Cho ăn 2 bữa", reward: "+15p tăng trưởng" },
  { id: 4, description: "Thu hoạch trứng", reward: "+10p tăng trưởng" },
  { id: 5, description: "Dùng thuốc 1 lần", reward: "+15p tăng trưởng" },
];

export default function DailyQuestPage() {
  const [completedQuests, setCompletedQuests] = useState([]);

  const handleComplete = (id) => {
    if (!completedQuests.includes(id)) {
      setCompletedQuests([...completedQuests, id]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📅 Nhiệm Vụ Hàng Ngày</h2>

      <ul className="space-y-4">
        {dailyQuests.map((quest) => (
          <li
            key={quest.id}
            className={`p-4 rounded-xl border ${
              completedQuests.includes(quest.id) ? "border-green-400 bg-green-50" : "border-gray-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">✅ {quest.description}</p>
                <p className="text-sm text-gray-500">🎁 Phần thưởng: {quest.reward}</p>
              </div>
              <button
                onClick={() => handleComplete(quest.id)}
                disabled={completedQuests.includes(quest.id)}
                className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
              >
                {completedQuests.includes(quest.id) ? "Hoàn thành" : "Hoàn tất"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
