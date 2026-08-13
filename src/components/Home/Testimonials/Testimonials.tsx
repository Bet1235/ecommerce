import "./Testimonials.css";

import Avatar from "../../../assets/reviews/user.1.png";

import Review1 from "../../../assets/reviews/unsplash_rhn8ff1G_QY.png";
import Review2 from "../../../assets/reviews/unsplash_jo40QKbxUP0.png";
import Review3 from "../../../assets/reviews/unsplash_ah7yIXWrtKs.png";
import Review4 from "../../../assets/reviews/unsplash_UUTOuXqaExk.png";
import Review5 from "../../../assets/reviews/unsplash_QLGA5Zv3doo.png";
import Review6 from "../../../assets/reviews/unsplash_GHztzvLLOdQ.png";
import Review7 from "../../../assets/reviews/unsplash_6_dx4H4yi1Y.png";
import Review8 from "../../../assets/reviews/unsplash_1R1ecHV4i0Y.png";
import Review9 from "../../../assets/reviews/unsplash_0y8p69vwIYM.png";

const galleryImages = [
  Review1,
  Review2,
  Review3,
  Review4,
  Review5,
  Review6,
  Review7,
  Review8,
  Review9,
];

const Testimonials = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial__content">
          {/* LEFT SIDE */}
          <div className="testimonial__review">
            <h2 className="testimonial__title">
              What they say about us
            </h2>

            <div className="testimonial__avatar">
              <img
                src={Avatar}
                alt="Regina Miles"
              />
            </div>

            <div
              className="testimonial__rating"
              aria-label="5 star rating"
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="testimonial__star--empty">
                ☆
              </span>
            </div>

            <p className="testimonial__quote">
              Slate helps you see how many days you need to work to
              reach your financial goal.
            </p>

            <p className="testimonial__name">
              Regina Miles
            </p>

            <p className="testimonial__role">
              Designer
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="testimonial__gallery">
            {galleryImages.map((image, index) => (
              <div
                className="testimonial__gallery-item"
                key={index}
              >
                <img
                  src={image}
                  alt={`Customer gallery ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;