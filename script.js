
const chickens = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  growTime: Math.floor(Math.random() * 500),  // minutes
  layTime: Math.floor(Math.random() * 1440),  // minutes
  health: 100 - Math.floor(Math.random() * 40)
}));

function showChickenInfo(index) {
  const chicken = chickens[index];
  document.getElementById('chicken-id').textContent = index + 1;
  document.getElementById('grow-time').textContent = chicken.growTime + " phút";
  document.getElementById('lay-time').textContent = chicken.layTime + " phút";
  document.getElementById('health').textContent = chicken.health;
  document.getElementById('chicken-info').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('chicken-info').classList.add('hidden');
}

function toggleShop() {
  const shop = document.getElementById('shop');
  shop.classList.toggle('hidden');
}
