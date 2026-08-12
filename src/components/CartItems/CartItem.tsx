import "./CartItem.css";

export interface CartItemData {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

interface CartItemProps {
  item: CartItemData;
  onIncrease?: (id: number) => void;
  onDecrease?: (id: number) => void;
  onRemove?: (id: number) => void;
}

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  const itemTotal = item.price * item.quantity;

  return (
    <article className="cart-item">
      <img
        className="cart-item__image"
        src={item.thumbnail}
        alt={item.title}
      />

      <div className="cart-item__content">
        <div className="cart-item__details">
          <h3 className="cart-item__title">{item.title}</h3>

          <p className="cart-item__price">
            ${item.price.toFixed(2)}
          </p>
        </div>

        <div className="cart-item__actions">
          <div className="cart-item__quantity">
            <button
              type="button"
              onClick={() => onDecrease?.(item.id)}
              disabled={item.quantity <= 1}
              aria-label={`Decrease quantity of ${item.title}`}
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              type="button"
              onClick={() => onIncrease?.(item.id)}
              aria-label={`Increase quantity of ${item.title}`}
            >
              +
            </button>
          </div>

          <strong className="cart-item__total">
            ${itemTotal.toFixed(2)}
          </strong>

          <button
            type="button"
            className="cart-item__remove"
            onClick={() => onRemove?.(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;