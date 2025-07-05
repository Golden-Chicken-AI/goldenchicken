
import React, { useState, useEffect } from "react";

const defaultQuests = [
  { id: "login", name: "Đăng nhập", reward: "⏱️ Tăng trưởng 5p", completed: false },
  { id: "feed1", name: "Cho ăn 1 bữa", reward: "⏱️ Tăng trưởng 5p", completed: false },
  { id: "feed2", name: "Cho ăn 2 bữa", reward: "⏱️ Tăng trưởng 10p", completed: false },
  { id: "collect", name: "Thu hoạch trứng", reward: "⏱️ Tăng trưởng 15p", completed: false },
  { id: "heal", name: "Dùng thuốc", reward: "⏱️ Tăng trưởng 5p", completed: false },
];

function QuestPage() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    // Giả lập: load từ localStorage hoặc reset mỗi ngày
    const saved = JSON.parse(localStorage.getItem("dailyQuests"));
    if (saved && new Date(saved.date).toDateString() === new Date().toDateString()) {
      setQuests(saved.data);
    } else {
      setQuests(defaultQuests);
    }
  }, []);

  useEffect(() => {
    // Lưu nhiệm vụ lại sau mỗi thay đổi
    localStorage.setItem("dailyQuests", JSON.stringify({ date: new Date(), data: quests }));
  }, [quests]);

  const claimReward = (id) => {
    setQuests((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, completed: true } : q
      )
    );
    alert("🎁 Bạn đã nhận phần thưởng!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📅 Nhiệm vụ hằng ngày</h2>

      <div className="space-y-4">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{quest.name}</h3>
              <p className="text-sm text-gray-500">🎁 {quest.reward}</p>
            </div>
            {quest.completed ? (
              <span className="text-green-500 font-bold">✅ Hoàn thành</span>
            ) : (
              <button
                onClick={() => claimReward(quest.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm"
              >
                ✅ Nhận
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestPage;
