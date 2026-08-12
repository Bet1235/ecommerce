import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCartCount, selectCartItems, selectCartSubtotal } from "../../features/cart/cartSlice";
import EmptyState from "../../components/EmptyState/EmptyState";
import { Link } from "react-router-dom";


const SHIPPING_THRESHOLD = 50;
const SHIPPING_FEE = 6.99;

const Cart = () => {
  const dispatch= useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const count = useAppSelector(selectCartCount);
  const [placedOrder, setPlacedOrder] = useState(false);
  const shipping = subtotal === 0 || subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const amountToFreeShipping = Math.max(0, SHIPPING_THRESHOLD - subtotal);

  const handleCheckout = ()=> {
    setPlacedOrder(true);
    dispatch(clearCart());
  };
   if (placedOrder) {
    return (
      <div className="container cart-page">
        <EmptyState title="Order Placed"
        message="Thanks for shopping here. A confirmation email will be sent soon"
        action={
          <Link to="/" className="btn btn-primary">
            Check Products
          </Link>
        }/>
      </div>
    );
   }
   return (
    <div className="container cart-page">
      <div className="cart-page_header">
        <h1>Your cart</h1>
      <p className="cart-page_count">{count} item{count === 1 ? ' ' : 's'}</p>
      </div>
      <div className="cart-page_layout">
        <section className="cart-list" aria label="Cart items">
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} item={item}/>
            ))}
          </ul>
          <button type="button" className="cart-list_clear" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </section>
            <aside className="order-summary">
              <h2 className="order-summary_title">Summary of Order</h2>
              
            </aside>
      </div>
       </div>
   )
}