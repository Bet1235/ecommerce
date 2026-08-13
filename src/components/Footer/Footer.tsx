import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      
      <div className="footer__top">
        <div className="footer__container footer__top-inner">

          <a href="/" className="footer__logo">
            Bandage
          </a>

          <div className="footer__socials">
            <a
              href="#facebook"
              className="footer__social"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#instagram"
              className="footer__social"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="#twitter"
              className="footer__social"
              aria-label="Twitter"
            >
              ♥
            </a>
          </div>

        </div>
      </div>


      
      <div className="footer__main">
        <div className="footer__container footer__main-grid">

          {/* COMPANY INFO */}
          <div className="footer__column">
            <h3 className="footer__heading">
              Company Info
            </h3>

            <a href="#about">About Us</a>
            <a href="#carrier">Carrier</a>
            <a href="#hiring">We are hiring</a>
            <a href="#blog">Blog</a>
          </div>


         
          <div className="footer__column">
            <h3 className="footer__heading">
              Legal
            </h3>

            <a href="#about">About Us</a>
            <a href="#carrier">Carrier</a>
            <a href="#hiring">We are hiring</a>
            <a href="#blog">Blog</a>
          </div>


         
          <div className="footer__column">
            <h3 className="footer__heading">
              Features
            </h3>

            <a href="#business">
              Business Marketing
            </a>

            <a href="#analytics">
              User Analytic
            </a>

            <a href="#live-chat">
              Live Chat
            </a>

            <a href="#support">
              Unlimited Support
            </a>
          </div>


         
          <div className="footer__column">
            <h3 className="footer__heading">
              Resources
            </h3>

            <a href="#ios">
              IOS &amp; Android
            </a>

            <a href="#demo">
              Watch a Demo
            </a>

            <a href="#customers">
              Customers
            </a>

            <a href="#api">
              API
            </a>
          </div>


          
          <div className="footer__column footer__contact">

            <h3 className="footer__heading">
              Get In Touch
            </h3>

            <form className="footer__form">

              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
              />

              <button type="submit">
                Subscribe
              </button>

            </form>

            <p className="footer__form-note">
              Lore imp sum dolor Amit
            </p>

          </div>

        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">

          <p>
            Made With Love By Finland All Right Reserved
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;