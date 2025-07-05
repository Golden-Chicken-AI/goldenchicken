
jsx
export default function Header({ toggleShop }) {
  return (
    <div className="header">
      <h1>🐔 Golden Chicken Farm</h1>
      <button onClick={toggleShop}>🛒 Cửa hàng</button>
    </div>
  );
}
