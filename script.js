
const chickens = {
  1: {
    name: "Gà Nòi",
    growLeft: "48 giờ",
    layLeft: "24 giờ",
    health: 100
  },
  2: {
    name: "Gà Tre",
    growLeft: "24 giờ",
    layLeft: "12 giờ",
    health: 90
  }
};

function showInfo(index) {
  const infoBox = document.getElementById('infoBox');
  if (chickens[index]) {
    const g = chickens[index];
    infoBox.innerHTML = `
      <strong>Ổ số ${index}</strong><br>
      Tên: ${g.name}<br>
      Trưởng thành còn: ${g.growLeft}<br>
      Đẻ trứng còn: ${g.layLeft}<br>
      Sức khỏe: ${g.health} / 100
    `;
  } else {
    infoBox.innerHTML = `<strong>Ổ số ${index}</strong><br>Hiện tại: Chưa có gà`;
  }
  infoBox.classList.remove('hidden');
}
