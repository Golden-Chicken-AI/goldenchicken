
import React, { useEffect, useState } from "react";
import ChickenCard from "../components/ChickenCard";
import chickensData from "../data/chickens";
import { canLayEgg, hoursPassed } from "../utils/timeUtils";

function FarmPage() {
  const [chickens, setChickens] = useState([]);

  useEffect(() => {
    // Tính toán trạng thái động khi trang load
    const updated = chickensData.map((chick) => {
      const hoursSinceEgg = hoursPassed(chick.lastEgg);
      const fedAgo = hoursPassed(chick.lastFed);

      const healthLoss = fedAgo * 10; // mỗi giờ không ăn mất 10 sức khỏe
      const currentHealth = Math.max(0, chick.health - healthLoss);

      return {
        ...chick,
        health: currentHealth,
        canLay: currentHealth >= 100 && canLayEgg(chick.lastEgg),
      };
    });

    setChickens(updated);
  }, []);

  const feedChicken = (id) => {
    setChickens((prev) =>
      prev.map((chick) =>
        chick.id === id
          ? {
              ...chick,
              health: 100,
              lastFed: Date.now(),
              canLay: canLayEgg(chick.lastEgg),
            }
          : chick
      )
    );
  };

  const collectEgg = (id) => {
    setChickens((prev) =>
      prev.map((chick) =>
        chick.id === id && chick.canLay
          ? {
              ...chick,
              eggs: chick.eggs + 1,
              lastEgg: Date.now(),
              canLay: false,
            }
          : chick
      )
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {chickens.map((chick) => (
        <ChickenCard
          key={chick.id}
          data={chick}
          onFeed={() => feedChicken(chick.id)}
          onCollect={() => collectEgg(chick.id)}
        />
      ))}
    </div>
  );
}

export default FarmPage;
