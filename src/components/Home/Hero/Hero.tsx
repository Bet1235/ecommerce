import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Modern Furniture Collection
          </p>

          <h1 className="hero__title">
            Make Your Home
            <br />
            Beautiful &amp; Comfortable
          </h1>

          <p className="hero__description">
            Discover carefully selected furniture designed to
            bring comfort, style, and character into your home.
          </p>

          <a
            href="#products"
            className="hero__button"
          >
            Shop Now
          </a>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__shape hero__shape--one" />
          <div className="hero__shape hero__shape--two" />

          <div className="hero__chair">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;