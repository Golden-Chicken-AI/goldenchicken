
import React, { useEffect, useState } from 'react';

export default function Chicken({ chicken }) {
  const [timeToNextEgg, setTimeToNextEgg] = useState(0);
  const [timeToAdult, setTimeToAdult] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const eggInterval = 24 * 60 * 60 * 1000; // 24h
      const ageInterval = 7 * 24 * 60 * 60 * 1000; // 7d

      setTimeToNextEgg(Math.max(0, eggInterval - (now - chicken.lastEggTime)));
      if (chicken.stage === 'baby') {
        setTimeToAdult(Math.max(0, ageInterval - (now - chicken.bornAt)));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [chicken]);

  const formatTime = ms => {
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="bg-white p-2 rounded shadow text-center">
      <div className="text-lg font-semibold">🐔 Chicken #{chicken.id}</div>
      <div className="text-sm">Health: {chicken.health}</div>
      {chicken.stage === 'adult' ? (
        <div className="text-sm">Next Egg: {formatTime(timeToNextEgg)}</div>
      ) : (
        <div className="text-sm">Time to Adult: {formatTime(timeToAdult)}</div>
      )}
    </div>
  );
}
