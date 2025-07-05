
jsx
import { useState, useEffect } from 'react';

export default function Chicken({ chicken }) {
  const [timeLeft, setTimeLeft] = useState(chicken.eggTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}h ${m}m ${sec}s`;
  };

  return (
    <div className="chicken">
      <div>🐔 {chicken.type}</div>
      <div>🧪 Sức khỏe: {chicken.health}/100</div>
      <div>🥚 Trứng tiếp theo: {format(timeLeft)}</div>
    </div>
  );
}
