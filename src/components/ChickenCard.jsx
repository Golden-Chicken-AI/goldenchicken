
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
        Sức

