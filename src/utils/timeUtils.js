
// Tính số giờ còn lại giữa thời điểm hiện tại và mốc target
export function hoursRemaining(targetTimestamp) {
  const now = Date.now();
  const diff = targetTimestamp - now;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60)));
}

// Kiểm tra đã qua bao nhiêu giờ từ mốc timestamp
export function hoursPassed(sinceTimestamp) {
  const now = Date.now();
  const diff = now - sinceTimestamp;
  return Math.floor(diff / (1000 * 60 * 60));
}

// Chuyển milliseconds thành chuỗi: "x giờ y phút"
export function formatTime(ms) {
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

// Kiểm tra gà đủ 24h để đẻ trứng chưa
export function canLayEgg(lastEggTimestamp) {
  return hoursPassed(lastEggTimestamp) >= 24;
}
