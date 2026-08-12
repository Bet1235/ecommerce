import { useAppDispatch } from "../../app/hooks";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../features/cart/cartSlice";
import { formatPrice, getDiscountedPrice } from "../../utils/price";
import QuantityStepper from "../QuantityStepper/QuantityStepper";
import type {CartItem as CartItemType} from "../../types/cart"
import './CartItem.css'

interface CartItemProps {
  item:CartItemType;
}
const CartItem = ({item} : CartItemProps) => {
  const dispatch = useAppDispatch();
  const unitPrice = getDiscountedPrice(item.price, item.discountPercentage);
  const lineTotal = unitPrice * item.quantity;
  const atStockLimit = item.quantity >= item.stock;

  return (
    <li className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item_image"/>
      <div className="cart-item_details">
        <p className="cart-item_title">{item.title}</p>
        <p className="cart-item_unit-price">{formatPrice(unitPrice)} each</p>
      {atStockLimit && <p className="cart-item_stock-note">Max stock reached</p>}

      <button type="button"
      className="cart-item_remove"
      onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
      </div>

    <div className="cart-item_controls">
      <QuantityStepper
      quantity={item.quantity}
      max={item.stock}
      onIncrement={() => dispatch(incrementQuantity(item.id))}}
      onDecrement={() => dispatch (decrementQuantity(item.id))}
      size="sm"
      />
      <p className="cart-item_line-total">{formatPrice(lineTotal)}</p>

    </div>
    </li>
  );
};
export default CartItem;