import "./FeaturedPosts.css";

import featuredPost1 from "../../../assets/posts/fixed-height1.png";
import featuredPost2 from "../../../assets/posts/unsplash2.png";
import featuredPost3 from "../../../assets/posts/unsplash3.png";


const posts = [
  {
    id: 1,
    image: featuredPost1,
    title: "Loudest à la Madison #1 (L'Integral)",
  },
  {
    id: 2,
    image: featuredPost2,
    title: "Loudest à la Madison #1 (L'Integral)",
  },
  {
    id: 3,
    image: featuredPost3,
    title: "Loudest à la Madison #1 (L'Integral)",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="featured-posts">
      <div className="container">
        <div className="featured-posts__header">
          <h2 className="featured-posts__title">
            Featured Posts
          </h2>
        </div>

        <div className="featured-posts__grid">
          {posts.map((post) => (
            <article
              className="post-card"
              key={post.id}
            >
              <div className="post-card__image">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />

                <span className="post-card__badge">
                  NEW
                </span>
              </div>

              <div className="post-card__content">
                <div className="post-card__categories">
                  <span className="post-card__category post-card__category--active">
                    Google
                  </span>

                  <span className="post-card__category">
                    Trending
                  </span>

                  <span className="post-card__category">
                    New
                  </span>
                </div>

                <h3 className="post-card__title">
                  {post.title}
                </h3>

                <p className="post-card__description">
                  We focus on ergonomics and meeting you
                  where you work. It's only a keystroke away.
                </p>

                <div className="post-card__meta">
                  <span className="post-card__date">
                    <span
                      className="post-card__meta-icon"
                      aria-hidden="true"
                    >
                      ◷
                    </span>
                    22 April 2021
                  </span>

                  <span className="post-card__comments">
                    <span
                      className="post-card__meta-icon"
                      aria-hidden="true"
                    >
                      ▥
                    </span>
                    10 comments
                  </span>
                </div>

                <a
                  href="#"
                  className="post-card__read-more"
                >
                  Learn More
                  <span
                    className="post-card__arrow"
                    aria-hidden="true"
                  >
                    ›
                  </span>
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