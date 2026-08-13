import "./HomeCTA.css";

const HomeCta = () => {
  return (
    <section className="home-cta">
      <div className="home-cta__content">
        <p className="home-cta__eyebrow">
          Designing Better Experience
        </p>

        <h2 className="home-cta__title">
          Problems trying to resolve
          <br />
          the conflict between
        </h2>

        <p className="home-cta__description">
          Problems trying to resolve the conflict between the two
          major realms of Classical physics
        </p>

        <p className="home-cta__price">
          $16.48
        </p>

        <a
          href="#products"
          className="home-cta__button"
        >
          ADD OUR CALL TO ACTION
        </a>
      </div>
    </section>
  );
};

export default HomeCta;