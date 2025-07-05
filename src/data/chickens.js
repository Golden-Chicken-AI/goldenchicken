
const chickensData = [
  {
    id: 1,
    name: "Gà Nơ",
    type: "basic",
    health: 100,
    eggs: 3,
    lastFed: Date.now() - 4 * 60 * 60 * 1000, // 4h trước
    lastEgg: Date.now() - 26 * 60 * 60 * 1000, // 26h trước
    canLay: true,
  },
  {
    id: 2,
    name: "Gà Vàng",
    type: "vang",
    health: 85,
    eggs: 5,
    lastFed: Date.now() - 10 * 60 * 60 * 1000, // 10h trước
    lastEgg: Date.now() - 23 * 60 * 60 * 1000, // 23h trước
    canLay: false,
  },
  {
    id: 3,
    name: "Gà Kim",
    type: "kimcuong",
    health: 60,
    eggs: 10,
    lastFed: Date.now() - 20 * 60 * 60 * 1000, // 20h trước
    lastEgg: Date.now() - 25 * 60 * 60 * 1000, // 25h trước
    canLay: true,
  },
];

export default chickensData;
