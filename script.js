
let chicken = {
  lastFed: null,
  nextEggTime: null,
};

function updateStatus() {
  const status = document.getElementById("status");
  const now = new Date();
  let msg = "";

  if (chicken.lastFed) {
    const fedTime = new Date(chicken.lastFed);
    msg += "Lần cho ăn gần nhất: " + fedTime.toLocaleString() + "<br/>";
  } else {
    msg += "Gà chưa được cho ăn lần nào.<br/>";
  }

  if (chicken.nextEggTime) {
    const eggTime = new Date(chicken.nextEggTime);
    if (eggTime > now) {
      const diff = Math.floor((eggTime - now) / 1000 / 60);
      msg += "Gà sẽ đẻ trứng sau: " + diff + " phút.";
    } else {
      msg += "Gà đã sẵn sàng đẻ trứng!";
    }
  }

  status.innerHTML = msg;
}

function feedChicken() {
  const now = new Date();
  chicken.lastFed = now.toISOString();
  chicken.nextEggTime = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString();
  localStorage.setItem("chicken", JSON.stringify(chicken));
  updateStatus();
}

function loadChicken() {
  const data = localStorage.getItem("chicken");
  if (data) {
    chicken = JSON.parse(data);
  }
  updateStatus();
}

window.onload = loadChicken;
