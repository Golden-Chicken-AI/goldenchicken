
let chickenCount = 3;

function updateChickenCount() {
  document.getElementById("chicken-count").innerText = `🐔 ${chickenCount}`;
}

function toggleChickenInfo() {
  const info = document.getElementById("chicken-info");
  info.classList.toggle("hidden");
  info.innerHTML = `<h3>Bạn có ${chickenCount} con gà trong chuồng.</h3>`;
}

function showTasks() {
  alert("Hiển thị nhiệm vụ hàng ngày (chưa xây dựng).");
}

function showSpin() {
  alert("Hiển thị vòng quay 7 ngày (chưa xây dựng).");
}

function showLeaderboard() {
  alert("Hiển thị bảng xếp hạng (chưa xây dựng).");
}

function openStore() {
  alert("Mở cửa hàng (chưa xây dựng).");
}

function openInventory() {
  alert("Mở kho đồ (chưa xây dựng).");
}

document.addEventListener("DOMContentLoaded", updateChickenCount);
