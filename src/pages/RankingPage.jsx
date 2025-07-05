
import React from "react";

const mockRankingData = {
  chickens: [
    { name: "Farmer A", count: 42 },
    { name: "Farmer B", count: 35 },
    { name: "Farmer C", count: 30 },
  ],
  eggs: [
    { name: "Farmer A", count: 120 },
    { name: "Farmer C", count: 95 },
    { name: "Farmer D", count: 80 },
  ],
  vip: [
    { name: "Farmer X", spent: 1500 },
    { name: "Farmer Y", spent: 1300 },
    { name: "Farmer Z", spent: 1000 },
  ],
};

function RankingPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">🏆 Bảng Xếp Hạng</h2>

      <div>
        <h3 className="text-xl font-semibold mb-2">🐔 Nhiều gà nhất</h3>
        <ul className="space-y-1">
          {mockRankingData.chickens.map((user, i) => (
            <li key={i} className="bg-white p-3 rounded-xl shadow">
              #{i + 1} - {user.name}: {user.count} con gà
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">🥚 Sản lượng trứng</h3>
        <ul className="space-y-1">
          {mockRankingData.eggs.map((user, i) => (
            <li key={i} className="bg-white p-3 rounded-xl shadow">
              #{i + 1} - {user.name}: {user.count} trứng
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">💎 Chi tiêu nhiều nhất (VIP)</h3>
        <ul className="space-y-1">
          {mockRankingData.vip.map((user, i) => (
            <li key={i} className="bg-white p-3 rounded-xl shadow">
              #{i + 1} - {user.name}: {user.spent} Pi
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RankingPage;
