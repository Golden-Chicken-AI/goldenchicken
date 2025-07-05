
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-100 p-4">
      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-4">
        Golden Chicken Farm
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-2 flex flex-col items-center"
          >
            <Image
              src="/chicken.png"
              alt="Chicken"
              width={80}
              height={80}
            />
            <p className="text-sm font-semibold text-center">Gà #{i + 1}</p>
            <p className="text-xs text-gray-600">Trưởng thành: 120h</p>
            <p className="text-xs text-gray-600">Đẻ tiếp: 23h</p>
            <p className="text-xs text-red-600">Sức khỏe: 100</p>
          </div>
        ))}
      </div>

      <Link
        href="/shop"
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        🛒 Cửa hàng
      </Link>
    </main>
  );
}
