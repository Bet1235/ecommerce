import "./Service.css";

const services = [
  {
    id: "easy-wins",
    title: "Easy Wins",
    description: "Get your best looking smile now!",
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="service-card__icon"
      >
        <path
          d="M24 6v36M6 24h36"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="24"
          cy="24"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: "concrete",
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="service-card__icon"
      >
        <rect
          x="9"
          y="9"
          width="30"
          height="30"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 16h16M16 24h16M16 32h10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "hack-growth",
    title: "Hack Growth",
    description:
      "Overcame any hurdle or any other problem.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="service-card__icon"
      >
        <path
          d="M8 36 20 24l8 7 12-15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 16h8v8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <header className="services__header">
          <p className="services__eyebrow">
            Featured Products
          </p>

         <h2 className="services__title">
            THE BEST SERVICES
          </h2>

          <p className="services__description">
            Problems trying to resolve the conflict between
          </p>
          
        </header>

        <div className="services__grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.id}
            >
              <div className="service-card__icon-wrapper">
                {service.icon}
              </div>

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