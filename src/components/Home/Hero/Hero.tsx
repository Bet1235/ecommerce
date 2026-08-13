import "./Hero.css";
import heroPic from "../../../assets/hero/col-md-4.png";
import heroPicOne from "../../../assets/hero/card-item.png";
import heroPicTwo from "../../../assets/hero/card-item1.png";
import heroPicThree from "../../../assets/hero/card-item2.png";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__grid">
          <img         
            src={heroPic}
            alt=""
            className="hero__image hero__image--1"
          />

         <img
            src={heroPicOne}
            alt=""
            className="hero__image hero__image--2"
          />
          <img
            src={heroPicTwo}
            alt=""
            className="hero__image hero__image--3"
          />

          <img
            src={heroPicThree}
            alt=""
            className="hero__image hero__image--4"
          />
       </div>
          
       
     
    </section>
  );
};

export default Hero;