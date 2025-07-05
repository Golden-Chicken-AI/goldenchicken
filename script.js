
function showInfo(index) {
  const infoBox = document.getElementById('infoBox');
  infoBox.innerHTML = `Ổ số ${index}<br>Hiện tại: Chưa có gà`;
  infoBox.classList.remove('hidden');
}
