import React, { useState } from 'react';

export default function App() {
  const [showMissions, setShowMissions] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const leaderboardData = [
    { name: 'Người chơi A', chickens: 15, eggs: 240, spending: 30 },
    { name: 'Người chơi B', chickens: 10, eggs: 180, spending: 22 },
    { name: 'Người chơi C', chickens: 8, eggs: 140, spending: 18 },
  ];

  return (
    <div className="relative w-screen h-screen bg-green-100 overflow-hidden">
      {/* Gà chính giữa */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="https://i.imgur.com/Wrm0ayZ.png" alt="Chicken" className="w-40 h-40" />
        <div className="text-center text-sm text-yellow-700 mt-1">Gà đang ngồi ổ</div>
      </div>

      {/* Icon trái */}
      <div className="absolute top-4 left-4 space-y-3">
        <button onClick={() => setShowMissions(true)} className="bg-white rounded-full p-2 shadow">
          📋
        </button>
        <button className="bg-white rounded-full p-2 shadow">🏠</button>
        <button className="bg-white rounded-full p-2 shadow">🛒</button>
        <button onClick={() => setShowLeaderboard(true)} className="bg-white rounded-full p-2 shadow">
          📊
        </button>
        <button className="bg-white rounded-full p-2 shadow">🎡</button>
      </div>

      {/* Icon phải */}
      <div className="absolute top-4 right-4 space-y-3">
        <button className="bg-white rounded-full p-2 shadow">👷</button>
        <button className="bg-white rounded-full p-2 shadow">🥚</button>
        <button className="bg-white rounded-full p-2 shadow">🍗</button>
      </div>

      {/* Popup nhiệm vụ */}
      {showMissions && (
        <div className="absolute top-1/2 left-1/2 w-80 bg-white shadow-xl rounded-xl p-4 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">📅 Nhiệm vụ</h2>
            <button onClick={() => setShowMissions(false)} className="text-red-500 font-bold">Đóng</button>
          </div>
          <div className="text-sm font-medium">🗓️ Nhiệm vụ ngày:</div>
          <ul className="text-sm space-y-1 mt-1">
            <li>Đăng nhập - <span className="text-green-600">⚡ +5p</span></li>
            <li>Cho ăn 1 bữa - <span className="text-green-600">⚡ +5p</span></li>
            <li>Cho ăn 2 bữa - <span className="text-green-600">⚡ +10p</span></li>
            <li>Thu hoạch trứng - <span className="text-green-600">⚡ +15p</span></li>
            <li>Dùng thuốc hồi sức - <span className="text-green-600">⭐ +1</span></li>
          </ul>
          <div className="text-sm font-medium mt-4">📆 Nhiệm vụ tuần:</div>
          <p className="text-sm">Điểm danh 7 ngày → 🎡 1 lượt quay</p>
        </div>
      )}

      {/* Popup bảng xếp hạng */}
      {showLeaderboard && (
        <div className="absolute top-1/2 left-1/2 w-80 bg-white shadow-xl rounded-xl p-4 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">📊 Bảng xếp hạng</h2>
            <button onClick={() => setShowLeaderboard(false)} className="text-red-500 font-bold">Đóng</button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-700 border-b">
                <th>Người chơi</th>
                <th>🐔</th>
                <th>🥚</th>
                <th>💰</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td>{item.name}</td>
                  <td>{item.chickens}</td>
                  <td>{item.eggs}</td>
                  <td>{item.spending}$</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
