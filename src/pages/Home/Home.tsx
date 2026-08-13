import Hero from "../../components/Home/Hero/Hero";
import Bestsellers from "../../components/Home/Bestseller/Bestseller";
import FeaturedPosts from "../../components/Home/FeaturedPosts/FeaturedPosts";
import HomeCta from "../../components/Home/HomeCTA/HomeCTA";
import Services from "../../components/Home/Services/Service";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <main className="home">
     
      <Hero/>
      <Bestsellers />
      <Services/>
      <FeaturedPosts/>
      <Testimonials/>
      <HomeCta/>
      <Footer/>
      
    </main>
  );
};

export default Home;