
// components/ChickenCard.js

import { useState, useEffect } from "react";

export default function ChickenCard({ chicken, onFeed, onHarvest }) {
  const [timeLeft, setTimeLeft] = useState(chicken.timeToLay);
  const [growLeft, setGrowLeft] = useState(chicken.growTime);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) setTimeLeft((prev) => prev - 1);
      if (!chicken.isMature && growLeft > 0) setGrowLeft((prev) => prev - 1);
    }, 60000); // mỗi phút

    return () => clearInterval(interval);
  }, [timeLeft, growLeft, chicken.isMature]);

  return (
    <div className="bg-white rounded-xl p-2 shadow text-center space-y-1">
      <img src="/chicken.png" alt="Gà" className="w-16 mx-auto" />
      <p className="text-sm font-bold">{chicken.name}</p>
      <p className="text-xs">SK: {chicken.health}/100</p>
      {!chicken.isMature ? (
        <p className="text-xs text-orange-500">Trưởng thành: {growLeft} phút</p>
      ) : (
        <p className="text-xs text-green-600">Đẻ sau: {timeLeft} phút</p>
      )}
      <div className="flex justify-center gap-2 mt-1">
        <button onClick={() => onFeed(chicken.id)} className="bg-yellow-200 px-2 py-1 rounded text-xs">🍗 Cho ăn</button>
        {chicken.isMature && timeLeft <= 0 && (
          <button onClick={() => onHarvest(chicken.id)} className="bg-blue-200 px-2 py-1 rounded text-xs">🥚 Thu trứng</button>
        )}
      </div>
    </div>
  );
}
