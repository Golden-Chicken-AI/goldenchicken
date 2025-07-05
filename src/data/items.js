
js
export const chickens = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  type: 'gà công nghiệp',
  stage: 'trưởng thành',
  health: 100,
  eggTimer: 86400, // 24h
  foodTime: Date.now(),
}));

export const shopItems = [
  { id: 1, name: 'Thức ăn thường', price: 1 },
  { id: 2, name: 'Thức ăn giảm 6h', price: 3 },
  { id: 3, name: 'Thức ăn giảm 12h', price: 5 },
  { id: 4, name: 'Giảm 4h đẻ trứng', price: 4 },
  { id: 5, name: 'Giảm 8h đẻ trứng', price: 7 },
  { id: 6, name: 'Thuốc tăng 50 sức khỏe', price: 2 },
];
