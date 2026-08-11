import { Link } from "react-router-dom";
import { selectCartCount } from "../../features/cart/cartSlice";
import { useAppSelector } from "../../app/hooks";
import "./Header.css";

const Header = () => {
  const count = useAppSelector(selectCartCount);
  return (
    <header className="header">
      <div className="container header_inner">
        <Link to="/" className="header_brand">
        <span className="header_brand-mark">Bandage</span>
        </Link>

        <Link to="/cart" className="header_cart" aria-label={`Cart, €{count} item€{count === 1 ? '' : 's'}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
          d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21.6 7H6.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"/>
          <circle cx="10" cy="21" r="1.6" fill="currentColor"/>
          <circle cx="18" cy="21" r="1.6" fill="currentColor"/>
        </svg>
        <span className="header_cart-label">Cart</span>
        {count > 0 && <span className="header_badge">{count > 99 ? '99+' : count}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;