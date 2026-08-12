import "./Service.css";

const services = [
  {
    number: "01",
    title: "Free Shipping",
    description:
      "Enjoy free delivery on selected orders and have your furniture delivered right to your door.",
  },
  {
    number: "02",
    title: "Secure Payment",
    description:
      "Shop with confidence using a secure and reliable checkout experience.",
  },
  {
    number: "03",
    title: "Easy Returns",
    description:
      "Changed your mind? Our straightforward return process makes shopping easier.",
  },
  {
    number: "04",
    title: "Customer Support",
    description:
      "Our support team is available to help you with your orders and questions.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__header">
          <p className="services__eyebrow">Why Shop With Us</p>

          <h2 className="services__title">
            We make shopping simple
          </h2>

          <p className="services__intro">
            Everything you need for a smooth and enjoyable
            shopping experience.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-card__number">
                {service.number}
              </span>

              <h3 className="service-card__title">
                {service.title}
              </h3>

              <p className="service-card__description">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;