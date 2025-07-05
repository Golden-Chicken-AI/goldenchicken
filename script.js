let chicken = JSON.parse(localStorage.getItem("myChicken")) || {
  type: "ga_thuong",
  health: 100,
  lastFed: Date.now(),
  lastLaid: Date.now(),
  eggs: 0
};

function updateUI() {
  const el = document.getElementById("chicken-status");
  const now = Date.now();
  const hoursSinceFed = Math.floor((now - chicken.lastFed) / 3600000);
  if (hoursSinceFed >= 36) chicken.health = Math.max(0, chicken.health - 1);
  const hoursToLay = chickenTypes[chicken.type].layInterval - Math.floor((now - chicken.lastLaid) / 3600000);
  el.innerHTML = `
    <p>Tên gà: ${chickenTypes[chicken.type].name}</p>
    <p>Sức khỏe: ${chicken.health}%</p>
    <p>Trứng đã đẻ: ${chicken.eggs}</p>
    <p>Thời gian còn lại để đẻ trứng: ${Math.max(0, hoursToLay)} giờ</p>
  `;
  localStorage.setItem("myChicken", JSON.stringify(chicken));
}
function feedChicken() {
  chicken.lastFed = Date.now();
  chicken.health = 100;
  updateUI();
}
function collectEgg() {
  const now = Date.now();
  const hoursPassed = Math.floor((now - chicken.lastLaid) / 3600000);
  if (hoursPassed >= chickenTypes[chicken.type].layInterval && chicken.health >= 100) {
    chicken.eggs += 1;
    chicken.lastLaid = now;
    alert("🥚 Đã thu hoạch 1 trứng!");
  } else {
    alert("⏳ Chưa đến lúc thu hoạch hoặc gà chưa đủ sức khỏe!");
  }
  updateUI();
}
function buyItem(item) {
  alert(`Đã mua: ${foodItems[item].name} (mô phỏng)`);
}
updateUI();
