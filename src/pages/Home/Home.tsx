import Hero from "../../components/Home/Hero/Hero";
import Bestsellers from "../../components/Home/Bestseller/Bestseller";
import FeaturedPosts from "../../components/Home/FeaturedPosts/FeaturedPosts";
import HomeCta from "../../components/Home/HomeCTA/HomeCTA";
import Services from "../../components/Home/Services/Service";
import Testimonial from "../../components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <main className="home">
      {/* Hero will go here */}
      <Hero/>
      <Bestsellers />
      <Services/>
      <FeaturedPosts/>
      <Testimonial/>
      <HomeCta/>
      {/* Other landing-page sections will go here */}
    </main>
  );
};

export default Home;