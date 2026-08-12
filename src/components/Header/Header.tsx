import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { selectCartCount } from "../../features/cart/cartSlice";
import { useAppSelector } from "../../app/hooks";
import "./Header.css";

const Header = () => {
  const count = useAppSelector(selectCartCount);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo" onClick={closeMenu}>
          Bandage
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <NavLink to="/" className="header__link">
            Home
          </NavLink>

          <NavLink to="/" className="header__link">
            Product
          </NavLink>

          <NavLink to="/" className="header__link">
            Pricing
          </NavLink>

          <NavLink to="/" className="header__link">
            Contact
          </NavLink>
        </nav>

        {/* Header Actions */}
        <div className="header__actions">
          <button
            type="button"
            className="header__action"
            aria-label="Search"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="header__action header__user"
            aria-label="Account"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="8"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M5 20C5.8 16.8 8.2 15 12 15C15.8 15 18.2 16.8 19 20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <Link
            to="/cart"
            className="header__cart"
            aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21.6 7H6.2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="21" r="1.6" fill="currentColor" />
              <circle cx="18" cy="21" r="1.6" fill="currentColor" />
            </svg>

            {count > 0 && (
              <span className="header__badge">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </Link>
        </div>

        {/* phone Menu Button */}
        <button
          type="button"
          className="header__menu-button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* phone Navigation */}
      <nav
        className={`header__mobile-nav ${
          isMenuOpen ? "header__mobile-nav--open" : ""
        }`}
        aria-label="Mobile navigation"
      >
        <NavLink to="/" className="header__mobile-link" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/" className="header__mobile-link" onClick={closeMenu}>
          Product
        </NavLink>

        <NavLink to="/" className="header__mobile-link" onClick={closeMenu}>
          Pricing
        </NavLink>

        <NavLink to="/" className="header__mobile-link" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;