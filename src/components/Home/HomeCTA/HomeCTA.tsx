import "./HomeCTA.css";

const HomeCta = () => {
  return (
    <section className="home-cta">
      <div className="container">
        <div className="home-cta__content">
          <p className="home-cta__eyebrow">
            Find Something You Love
          </p>

          <h2 className="home-cta__title">
            Make your space feel like home.
          </h2>

          <p className="home-cta__description">
            Explore our collection of carefully selected products
            and find pieces that fit your style and everyday life.
          </p>

          <a
            href="#products"
            className="home-cta__button"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;