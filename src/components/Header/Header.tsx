// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// import { useAppSelector } from "../../app/hooks";
// import { selectCartCount } from "../../features/cart/cartSlice";

// import "./Header.css";

// const Header = () => {
//   const count = useAppSelector(selectCartCount);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="header">
     
//       <div className="header__topbar">
//         <div className="container header__topbar-inner">
//           <div className="header__contact">
//             <a href="tel:+1225550118">
//               <span aria-hidden="true">☎</span>
//               (225) 555-0118
//             </a>

//             <a href="mailto:michelle.rivera@example.com">
//               <span aria-hidden="true">✉</span>
//               michelle.rivera@example.com
//             </a>
//           </div>

//           <p className="header__promotion">
//             Follow Us and get a chance to win 80% off
//           </p>

//           <div className="header__social">
//             <span>Follow Us :</span>

//             <a href="#" aria-label="Instagram">
//               ◎
//             </a>

//             <a href="#" aria-label="YouTube">
//               ▶
//             </a>

//             <a href="#" aria-label="Facebook">
//               f
//             </a>

//             <a href="#" aria-label="Twitter">
//               ♥
//             </a>
//           </div>
//         </div>
//       </div>

     
//       <div className="header__main">
//         <div className="container header__inner">
//           <Link to="/" className="header__logo" onClick={closeMenu}>
//             Bandage
//           </Link>

//           <nav className="header__nav" aria-label="Main navigation">
//             <NavLink to="/" className="header__link">
//               Home
//             </NavLink>

//             <NavLink to="/products" className="header__link">
//               Shop
//             </NavLink>

//             <NavLink to="/about" className="header__link">
//               About
//             </NavLink>

//             <NavLink to="/blog" className="header__link">
//               Blog
//             </NavLink>

//             <NavLink to="/contact" className="header__link">
//               Contact
//             </NavLink>

//             <NavLink to="/pages" className="header__link">
//               Pages
//             </NavLink>
//           </nav>

//           <div className="header__actions">
//             <button
//               type="button"
//               className="header__action header__login"
//               aria-label="Login or register"
//             >
//               <span aria-hidden="true">♙</span>
//               <span>Login / Register</span>
//             </button>

//             <button
//               type="button"
//               className="header__action"
//               aria-label="Search"
//             >
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 aria-hidden="true"
//               >
//                 <circle
//                   cx="11"
//                   cy="11"
//                   r="6.5"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                 />
//                 <path
//                   d="M16 16L21 21"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </button>

//             <Link
//               to="/cart"
//               className="header__cart"
//               aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
//             >
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21.6 7H6.2"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <circle cx="10" cy="21" r="1.6" fill="currentColor" />
//                 <circle cx="18" cy="21" r="1.6" fill="currentColor" />
//               </svg>

//               {count > 0 && (
//                 <span className="header__badge">
//                   {count > 99 ? "99+" : count}
//                 </span>
//               )}
//             </Link>

//             <button
//               type="button"
//               className="header__action header__wishlist"
//               aria-label="Wishlist"
//             >
//               ♡
//             </button>
//           </div>

//           <button
//             type="button"
//             className="header__menu-button"
//             onClick={() => setIsMenuOpen((previous) => !previous)}
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={isMenuOpen}
//           >
//             <span />
//             <span />
//             <span />
//           </button>
//         </div>

//         {/* Mobile navigation */}
//         <nav
//           className={`header__mobile-nav ${
//             isMenuOpen ? "header__mobile-nav--open" : ""
//           }`}
//           aria-label="Mobile navigation"
//         >
//           <NavLink to="/" className="header__mobile-link" onClick={closeMenu}>
//             Home
//           </NavLink>

//           <NavLink
//             to="/products"
//             className="header__mobile-link"
//             onClick={closeMenu}
//           >
//             Shop
//           </NavLink>

//           <NavLink
//             to="/about"
//             className="header__mobile-link"
//             onClick={closeMenu}
//           >
//             About
//           </NavLink>

//           <NavLink
//             to="/blog"
//             className="header__mobile-link"
//             onClick={closeMenu}
//           >
//             Blog
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className="header__mobile-link"
//             onClick={closeMenu}
//           >
//             Contact
//           </NavLink>

//           <Link
//             to="/cart"
//             className="header__mobile-link"
//             onClick={closeMenu}
//           >
//             Cart ({count})
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { selectCartCount } from "../../features/cart/cartSlice";
import { useAppSelector } from "../../app/hooks";
import "./Header.css";

const Header = () => {
  const count = useAppSelector(selectCartCount);

  // Open by default so the mobile reference matches the supplied design.
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Desktop top bar */}
      <div className="header__topbar">
        <div className="header__topbar-inner container">
          <div className="header__topbar-left">
            <span>Phone: +1 234 567 890</span>
            <span>Email: info@example.com</span>
          </div>

          <div className="header__topbar-center">
            Follow Us and get a chance to win 80% off
          </div>

          <div className="header__topbar-right">
            <span>Follow Us:</span>
            <span> <a href="#" aria-label="Instagram">
              ◎
            </a></span>
            <span> <a href="#" aria-label="YouTube">
              ▶
             </a></span>
            <span><a href="#" aria-label="Facebook">
              f
            </a></span>
            <span><a href="#" aria-label="Twitter">
               ♥
             </a></span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="header__main">
        <div className="container header__inner">
          <Link
            to="/"
            className="header__logo"
            onClick={closeMenu}
          >
            Bandage
          </Link>

          {/* Desktop navigation */}
          <nav
            className="header__nav"
            aria-label="Main navigation"
          >
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

            <NavLink to="/" className="header__link">
              Pages
            </NavLink>
          </nav>

          {/* Actions */}
          <div className="header__actions">
            <Link
              to="/"
              className="header__login"
            >
              Login / Register
            </Link>

            {/* Search */}
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

            {/* Cart */}
            <Link
              to="/cart"
              className="header__cart"
              aria-label={`Cart, ${count} item${
                count === 1 ? "" : "s"
              }`}
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
                <circle
                  cx="10"
                  cy="21"
                  r="1.6"
                  fill="currentColor"
                />
                <circle
                  cx="18"
                  cy="21"
                  r="1.6"
                  fill="currentColor"
                />
              </svg>

              {count > 0 && (
                <span className="header__badge">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>

            {/* Mobile menu */}
            <button
              type="button"
              className="header__menu-button"
              onClick={() =>
                setIsMenuOpen((previous) => !previous)
              }
              aria-label={
                isMenuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <nav
          className={`header__mobile-nav ${
            isMenuOpen
              ? "header__mobile-nav--open"
              : ""
          }`}
          aria-label="Mobile navigation"
        >
          <NavLink
            to="/"
            className="header__mobile-link"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/"
            className="header__mobile-link"
            onClick={closeMenu}
          >
            Product
          </NavLink>

          <NavLink
            to="/"
            className="header__mobile-link"
            onClick={closeMenu}
          >
            Pricing
          </NavLink>

          <NavLink
            to="/"
            className="header__mobile-link"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;