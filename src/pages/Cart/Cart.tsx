import { useMemo } from "react";
import {
  clearCart,
  selectCartItems,
  selectCartSubtotal,
} from "../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

const SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 10;

const Cart = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);

  const shipping = useMemo(() => {
    if (subtotal === 0) {
      return 0;
    }

    return subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  }, [subtotal]);

  const total = subtotal + shipping;

  const amountToFreeShipping = Math.max(
    0,
    SHIPPING_THRESHOLD - subtotal,
  );

  const handleCheckout = () => {
    alert("Checkout will be available soon.");
  };

  return (
    <main className="cart-page">
      <div className="container">
        <header className="cart-page__header">
          <h1>Your Cart</h1>

          {items.length > 0 && (
            <button
              type="button"
              className="cart-list__clear"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          )}
        </header>

        {items.length === 0 ? (
          <section className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Add some products to get started.</p>
          </section>
        ) : (
          <div className="cart-page__layout">
            <section
              className="cart-list"
              aria-label="Cart items"
            >
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              {amountToFreeShipping > 0 && (
                <p className="cart-summary__shipping-message">
                  Add ${amountToFreeShipping.toFixed(2)} more for free
                  shipping.
                </p>
              )}

              <div className="cart-summary__row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="cart-summary__row">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="cart-summary__total">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>

              <button
                type="button"
                className="cart-summary__checkout"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;