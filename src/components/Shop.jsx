
jsx
import { shopItems } from '../data/items';

export default function Shop({ close }) {
  return (
    <div className="shop">
      <h3>Cửa hàng</h3>
      {shopItems.map((item) => (
        <div key={item.id} className="shop-item">
          <span>{item.name}</span>
          <span>{item.price} Pi</span>
        </div>
      ))}
      <button onClick={close}>Đóng</button>
    </div>
  );
}
