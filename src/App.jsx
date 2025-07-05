
import React from "react";
import FarmPage from "./pages/FarmPage";

function App() {
  return (
    <div className="min-h-screen bg-secondary p-4">
      <header className="text-center py-4 mb-6 bg-primary text-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold">🐣 Golden Chicken Farm</h1>
        <p className="text-sm mt-1">Nuôi gà – Thu trứng – Mở rộng chuồng trại!</p>
      </header>

      <main>
        <FarmPage />
      </main>
    </div>
  );
}

export default App;
