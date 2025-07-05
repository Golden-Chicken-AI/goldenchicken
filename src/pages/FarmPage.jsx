
import React, { useState } from "react";
import ChickenCard from "../components/ChickenCard";
import chickensData from "../data/chickens";

function FarmPage() {
  const [chickens, setChickens] = useState(chickensData);

  // Cho ăn: tăng sức khỏe lên tối đa (100)
  const feedChicken = (id) => {
    setChickens(prev =>
      prev.map(chick =>
        chick.id === id
          ? { ...chick, health: 100, lastFed: Date.now() }
          : chick
      )
    );
  };

  // Thu hoạch trứng nếu đã sẵn sàng
  const collectEgg = (id) => {
    setChickens(prev =>
      prev.map(chick =>
        chick.id === id && chick.canLay
          ? { ...chick, eggs: chick.eggs + 1, lastEgg: Date.now(), canLay: false }
          : chick
      )
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
