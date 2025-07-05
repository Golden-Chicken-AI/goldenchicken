
import React, { useState } from "react";

const workerTypes = [
  {
    id: "feeder",
    name: "👨‍🌾 Người cho ăn",
    costPerWeek: 20,
    job: "Tự động cho gà ăn",
  },
  {
    id: "collector",
    name: "🧺 Người thu trứng",
    costPerWeek: 20,
    job: "Tự động thu hoạch trứng",
  },
];

function WorkerPage() {
  const [workers, setWorkers] = useState({
    feeder: false,
    collector: false,
  });

  const [balance, setBalance] = useState(100); // Pi hiện có (giả lập)

  const hireWorker = (id) => {
    const worker = workerTypes.find((w) => w.id === id);
    if (balance < worker.costPerWeek) {
      alert("Không đủ Pi để thuê!");
      return;
    }

    setWorkers((prev) => ({
      ...prev,
      [id]: true,
    }));

    setBalance(balance - worker.costPerWeek);
    alert(`✅ Đã thuê ${worker.name} trong 1 tuần`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">👷‍♂️ Thuê Công Nhân</h2>
      <p className="mb-4">💰 Pi hiện có: {balance} Pi</p>

      <div className="space-y-4">
        {workerTypes.map((worker) => (
          <div
            key={worker.id}
            className="bg-white p-4 shadow rounded-2xl flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">{worker.name}</h3>
              <p className="text-sm text-gray-500">{worker.job}</p>
              <p className="text-sm text-gray-500">
                📅 Chi phí: {worker.costPerWeek} Pi / tuần
              </p>
            </div>

            {workers[worker.id] ? (
              <span className="text-green-600 font-semibold">✅ Đã thuê</span>
            ) : (
              <button
                onClick={() => hireWorker(worker.id)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl text-sm"
              >
                Thuê ngay
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkerPage;
