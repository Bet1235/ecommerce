import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              Shop
            </a>

            <p className="footer__description">
              Discover carefully selected products designed
              to make everyday living better.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__column">
              <h2 className="footer__heading">Shop</h2>
              <a href="#products">Products</a>
              <a href="#bestsellers">Bestsellers</a>
              <a href="#featured">Featured</a>
            </div>

            <div className="footer__column">
              <h2 className="footer__heading">Company</h2>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer__column">
              <h2 className="footer__heading">Support</h2>
              <a href="#faq">FAQ</a>
              <a href="#shipping">Shipping</a>
              <a href="#returns">Returns</a>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Shop. All rights reserved.
          </p>

          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;