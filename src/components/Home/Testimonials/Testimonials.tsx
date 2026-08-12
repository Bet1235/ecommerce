import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "The whole shopping experience was simple and smooth. I found exactly what I was looking for and the quality was excellent.",
    name: "Sarah Johnson",
    role: "Verified Customer",
  },
  {
    quote:
      "I love how easy it was to find beautiful pieces for my home. Everything arrived safely and looked exactly as expected.",
    name: "Daniel Williams",
    role: "Verified Customer",
  },
  {
    quote:
      "Great products, beautiful designs, and excellent customer service. I would definitely shop here again.",
    name: "Amelia Brown",
    role: "Verified Customer",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial__header">
          <p className="testimonial__eyebrow">
            Customer Stories
          </p>

          <h2 className="testimonial__title">
            What our customers say
          </h2>
        </div>

        <div className="testimonial__grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
            >
              <div
                className="testimonial-card__stars"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>

              <blockquote className="testimonial-card__quote">
                “{testimonial.quote}”
              </blockquote>

              <div className="testimonial-card__author">
                <div
                  className="testimonial-card__avatar"
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="testimonial-card__name">
                    {testimonial.name}
                  </p>

                  <p className="testimonial-card__role">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;