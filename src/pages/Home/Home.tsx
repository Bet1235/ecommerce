import Hero from "../../components/hero/Hero";
import Bestsellers from "../../section/home/Bestseller/Bestseller";
import Services from "../../section/home/Services/Service";

const Home = () => {
  return (
    <main className="home">
      {/* Hero will go here */}
      <Hero/>
      <Bestsellers />
      <Services/>
      {/* Other landing-page sections will go here */}
    </main>
  );
};

export default Home;