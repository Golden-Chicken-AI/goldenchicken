
import React from "react";

function ChickenCard({ data, onFeed, onCollect }) {
  const {
    name,
    type,
    health,
    eggs,
    canLay,
  } = data;

  const healthColor = health > 70 ? "bg-green-400" : health > 30 ? "bg-yellow-400" : "bg-red-400";

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-yellow-200 flex flex-col items-center">
      <div className="text-xl font-semibold">{name}</div>
      <div className="text-sm text-gray-500 mb-2">({type})</div>

      <img
        src={`/chicken-${type}.png`}
        alt="chicken"
        className="w-24 h-24 object-contain mb-3"
      />

      <div className="w-full mb-2">
        <div className="text-sm font-medium mb-1">Sức khỏe:</div>
        <div className="w-full h-4 bg-gray-200 rounded-full">
          <div
            className={`h-full ${healthColor} rounded-full`}
            style={{ width: `${health}%` }}
          ></div>
        </div>
      </div>

      <div className="text-sm mb-2">🥚 Trứng: {eggs}</div>

      <div className="flex gap-2 mt-2">
        <button
          onClick={onFeed}
          className="bg-yellow-300 hover:bg-yellow-400 px-3 py-1 rounded-full text-sm font-medium"
        >
          🍽️ Cho ăn
        </button>

        <button
          onClick={onCollect}
          disabled={!canLay}
          className={`${
            canLay ? "bg-blue-300 hover:bg-blue-400" : "bg-gray-300"
          } px-3 py-1 rounded-full text-sm font-medium`}
        >
          🧺 Thu trứng
        </button>
      </div>
    </div>
  );
}

export default ChickenCard;
