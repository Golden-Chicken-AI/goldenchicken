
// data/chickenData.js

export const chickenTypes = {
  industrial: {
    name: "Gà công nghiệp",
    growTime: 168 * 60, // 168h -> phút
    layInterval: 24 * 60, // 24h
    maxEggs: 250,
    eggValue: 1,
    health: 100,
    price: 0, // gà tặng
  },
  viet: {
    name: "Gà ta",
    growTime: 140 * 60,
    layInterval: 24 * 60,
    maxEggs: 300,
    eggValue: 1.5,
    health: 100,
    price: 5,
  },
  japan: {
    name: "Gà Nhật",
    growTime: 120 * 60,
    layInterval: 24 * 60,
    maxEggs: 400,
    eggValue: 2,
    health: 100,
    price: 8,
  },
};

export const items = {
  foods: [
    { name: "Thức ăn thường", type: "feed", effect: 0, price: 0.1 },
    { name: "Thức ăn tăng trưởng -6h", type: "grow", effect: -360, price: 0.3 },
    { name: "Thức ăn tăng trưởng -12h", type: "grow", effect: -720, price: 0.6 },
    { name: "Thức ăn đẻ trứng -4h", type: "lay", effect: -240, price: 0.25 },
    { name: "Thức ăn đẻ trứng -8h", type: "lay", effect: -480, price: 0.5 },
  ],
  medicines: [
    { name: "Thuốc hồi phục +50 máu", type: "heal", effect: 50, price: 0.5 },
  ],
};
