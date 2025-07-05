let state = JSON.parse(localStorage.getItem("goldenChicken")) || {
    health: 100,
    eggsLaid: 0,
    eggTimer: 86400,
    food: 5,
    medicine: 1,
    eggsOwned: 0,
    pi: 100,
    lastFeed: Date.now(),
};

function updateUI() {
    document.getElementById("health").innerText = state.health;
    document.getElementById("eggsLaid").innerText = state.eggsLaid;
    document.getElementById("eggTimer").innerText = formatTime(state.eggTimer);
    document.getElementById("foodQty").innerText = state.food;
    document.getElementById("medQty").innerText = state.medicine;
    document.getElementById("piBalance").innerText = state.pi;
    document.getElementById("eggsOwned").innerText = state.eggsOwned;
}

function formatTime(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    return h + "h " + m + "m";
}

function feedChicken() {
    if (state.food > 0) {
        state.food--;
        state.lastFeed = Date.now();
        state.health = Math.min(100, state.health + 5);
        saveState();
        updateUI();
        alert("Đã cho gà ăn!");
    } else {
        alert("Không đủ thức ăn!");
    }
}

function useMedicine() {
    if (state.medicine > 0 && state.health < 100) {
        state.medicine--;
        state.health = Math.min(100, state.health + 50);
        saveState();
        updateUI();
        alert("Đã dùng thuốc!");
    } else {
        alert("Không thể dùng thuốc!");
    }
}

function buyItem(type) {
    if (type === "food" && state.pi >= 1) {
        state.food += 5;
        state.pi -= 1;
    } else if (type === "medicine" && state.pi >= 3) {
        state.medicine += 1;
        state.pi -= 3;
    } else {
        alert("Không đủ Pi!");
        return;
    }
    saveState();
    updateUI();
}

function collectEgg() {
    if (state.eggTimer <= 0 && state.health === 100) {
        state.eggsOwned++;
        state.eggsLaid++;
        state.eggTimer = 86400;
        saveState();
        updateUI();
        alert("Đã thu hoạch trứng!");
    } else {
        alert("Chưa tới lúc đẻ trứng hoặc gà không đủ sức khỏe!");
    }
}

function tick() {
    const now = Date.now();
    const hoursWithoutFeed = (now - state.lastFeed) / 3600000;
    if (hoursWithoutFeed > 72) {
        state.health = 0;
    } else if (hoursWithoutFeed > 24) {
        state.health = Math.max(0, 100 - Math.floor(hoursWithoutFeed - 24) * 2);
    }
    if (state.eggTimer > 0 && state.health === 100) {
        state.eggTimer--;
    }
    saveState();
    updateUI();
}

function saveState() {
    localStorage.setItem("goldenChicken", JSON.stringify(state));
}

setInterval(tick, 1000);
updateUI();