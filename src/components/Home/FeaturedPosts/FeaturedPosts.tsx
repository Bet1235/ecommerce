import "./FeaturedPosts.css";

const posts = [
  {
    number: "01",
    category: "Interior",
    title: "How to create a comfortable home",
    description:
      "Simple ideas for creating a home that feels welcoming, comfortable, and personal.",
  },
  {
    number: "02",
    category: "Furniture",
    title: "Choosing furniture for your space",
    description:
      "A practical guide to choosing furniture that works beautifully with your space.",
  },
  {
    number: "03",
    category: "Lifestyle",
    title: "Small changes, beautiful spaces",
    description:
      "Discover simple ways to refresh your home without completely changing your interior.",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="featured-posts">
      <div className="container">
        <div className="featured-posts__header">
          <div>
            <p className="featured-posts__eyebrow">
              From Our Journal
            </p>

            <h2 className="featured-posts__title">
              Featured Posts
            </h2>
          </div>

          <a
            href="#"
            className="featured-posts__link"
          >
            View All Posts
          </a>
        </div>

        <div className="featured-posts__grid">
          {posts.map((post) => (
            <article
              className="post-card"
              key={post.number}
            >
              <div className="post-card__image">
                <span>{post.number}</span>
              </div>

              <div className="post-card__content">
                <p className="post-card__category">
                  {post.category}
                </p>

                <h3 className="post-card__title">
                  {post.title}
                </h3>

                <p className="post-card__description">
                  {post.description}
                </p>

                <a
                  href="#"
                  className="post-card__read-more"
                >
                  Read More
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;