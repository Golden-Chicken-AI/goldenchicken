
const coopsContainer = document.getElementById("coops");
const chickenInfo = document.getElementById("chicken-info");
const storeBtn = document.getElementById("store-btn");
const store = document.getElementById("store");

const chickens = [];

for (let i = 0; i < 10; i++) {
  chickens.push({
    id: i,
    maturity: 10080, // phút còn lại để trưởng thành
    eggTimer: 1440,  // phút còn lại để đẻ trứng
    health: 100,
  });
}

function renderCoops() {
  coopsContainer.innerHTML = "";
  chickens.forEach((chicken) => {
    const div = document.createElement("div");
    div.className = "coop";
    div.innerText = `Ổ ${chicken.id + 1}`;
    div.onclick = () => showChickenInfo(chicken);
    coopsContainer.appendChild(div);
  });
}

function showChickenInfo(chicken) {
  const isMature = chicken.maturity <= 0;
  const eggStatus = !isMature
    ? "Chưa trưởng thành"
    : chicken.health < 100
      ? "Chờ hồi phục"
      : "Đang đếm ngược trứng";

  chickenInfo.innerHTML = `
    <p><strong>Ổ số:</strong> ${chicken.id + 1}</p>
    <p><strong>Trạng thái:</strong> ${isMature ? "Đã trưởng thành" : "Gà con"}</p>
    <p><strong>Thời gian trưởng thành còn lại:</strong> ${isMature ? "Đã trưởng thành" : formatMinutes(chicken.maturity)}</p>
    <p><strong>Trạng thái đẻ trứng:</strong> ${eggStatus}</p>
    <p><strong>Thời gian đẻ trứng còn lại:</strong> ${isMature && chicken.health === 100 ? formatMinutes(chicken.eggTimer) : "-"}</p>
    <p><strong>Sức khỏe:</strong> ${chicken.health}/100</p>
  `;
}

function formatMinutes(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

storeBtn.onclick = () => {
  store.classList.toggle("hidden");
};

renderCoops();
