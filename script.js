
const coopsEl = document.getElementById("coops");
const modal = document.getElementById("chicken-info-modal");
const details = document.getElementById("chicken-details");

const chickens = Array(10).fill().map((_, i) => ({
  id: i + 1,
  matureIn: Math.floor(Math.random() * 500),
  layIn: 1440,
  health: 100,
}));

function renderCoops() {
  coopsEl.innerHTML = "";
  chickens.forEach(chicken => {
    const coop = document.createElement("div");
    coop.className = "coop";
    coop.innerHTML = `🐔<br/>Ổ #${chicken.id}`;
    coop.onclick = () => showInfo(chicken);
    coopsEl.appendChild(coop);
  });
}

function showInfo(chicken) {
  details.innerHTML = `
    🐔 Gà #${chicken.id}<br/>
    🕑 Còn ${chicken.matureIn} phút để trưởng thành<br/>
    🥚 Còn ${chicken.layIn} phút để đẻ trứng<br/>
    ❤️ Sức khỏe: ${chicken.health}/100
  `;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function toggleShop() {
  const shop = document.getElementById("shop");
  shop.classList.toggle("hidden");
}

renderCoops();
