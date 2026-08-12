import Hero from "../../components/hero/Hero";
import Bestsellers from "../../section/home/Bestseller/Bestseller";
import FeaturedPosts from "../../section/home/FeaturedPosts/FeaturedPosts";
import Services from "../../section/home/Services/Service";
import Testimonial from "../../section/home/Testimonials/Testimonials";

const Home = () => {
  return (
    <main className="home">
      {/* Hero will go here */}
      <Hero/>
      <Bestsellers />
      <Services/>
      <FeaturedPosts/>
      <Testimonial/>
      {/* Other landing-page sections will go here */}
    </main>
  );
};

export default Home;