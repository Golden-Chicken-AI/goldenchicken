
import React from "react";
import { hoursPassed, hoursRemaining } from "../utils/timeUtils";

function ChickenCard({ data, onFeed, onCollect }) {
  const {
    name,
    type,
    health,
    eggs,
    lastEgg,
    lastFed,
    canLay,
  } = data;

  const fedAgo = hoursPassed(lastFed);
  const nextEggIn = 24 - hoursPassed(lastEgg);

  const getImage = () => {
    switch (type) {
      case "basic":
        return "/chicken-basic.png";
      case "vang":
        return "/chicken-vang.png";
      case "kimcuong":
        return "/chicken-kimcuong.png";
      default:
        return "/chicken-basic.png";
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center">
      <img src={getImage()} alt={name} className="w-24 h-24 mb-2" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-gray-500 mb-1">Loại: {type}</p>
      <p className={`text-sm ${health < 50 ? "text-red-500" : "text-green-600"}`}>
        Sức khỏe: {health}%
      </p>
      <p className="text-sm">Trứng: {eggs}</p>
      <p className="text-sm">Cho ăn: {fedAgo} giờ trước</p>

      {canLay ? (
        <p className="text-blue-600 mt-2">✅ Có thể thu hoạch!</p>
      ) : (
        <p className="text-gray-500 mt-2">
          🕒 Đẻ tiếp sau: {nextEggIn > 0 ? `${nextEggIn}h` : "đã đủ giờ"}
        </p>
      )}

      <div className="flex gap-2 mt-4">
        <button
          onClick={onFeed}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-xl text-sm"
        >
          🍽️ Cho ăn
        </button>
        <button
          onClick={onCollect}
          disabled={!canLay}
          className={`px-3 py-1 rounded-xl text-sm ${
            canLay
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          🥚 Thu trứng
        </button>
      </div>
    </div>
  );
}

export default ChickenCard;

