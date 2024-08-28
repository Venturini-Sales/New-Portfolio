import "./Projects.css";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/context";
import {
  sectionsIdioms,
  textIdioms,
  miscellaneousIdioms,
} from "../../data/language";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Triade from "../../assets/images/triade.png";
import Aerowave from "../../assets/images/Aerowave.png";
import Pokedex from "../../assets/images/Pokedex.png";
import Bmi from "../../assets/images/BMI.png";

export const Projects = () => {
  const { language } = useContext(LanguageContext);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    dots: true,
    pauseOnHover: true,
    speed: 600,
    autoplaySpeed: 8000,
  };

  return (
    <div className="projects">
      <motion.div
        viewport={{ once: true, amount: 0.4 }}
        initial={{ x: "20vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 25 }}
      >
        <div className="centralContent">
          <h1>{sectionsIdioms.projects[language]}</h1>

          <div className="slider">
            <Slider {...settings}>
              <div className="sliderItem">
                <img className="projectImage" src={Triade} alt="" />
                <div className="infoArea">
                  <div className="info">
                    {textIdioms.projectText[`${language}0`]}
                  </div>

                  <div className="linksArea">
                    <a
                      target="blank"
                      href="http://triadegestaocontabil.com.br/"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}1`]}
                      </button>
                    </a>
                    <a
                      target="blank"
                      href="http://triadegestaocontabil.com.br/"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}2`]}
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="sliderItem">
                <img className="projectImage" src={Aerowave} alt="" />
                <div className="infoArea">
                  <div className="info">
                    {textIdioms.projectText[`${language}1`]}
                  </div>

                  <div className="linksArea">
                    <a
                      target="blank"
                      href="https://github.com/Venturini-Sales/AeroWave"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}1`]}
                      </button>
                    </a>
                    <a target="blank" href="https://aerowave-zeta.vercel.app/">
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}2`]}
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="sliderItem">
                <img className="projectImage" src={Bmi} alt="" />
                <div className="infoArea">
                  <div className="info">
                    {textIdioms.projectText[`${language}2`]}
                  </div>

                  <div className="linksArea">
                    <a
                      target="blank"
                      href="https://github.com/Venturini-Sales/BMICalculator"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}1`]}
                      </button>
                    </a>
                    <a
                      target="blank"
                      href="https://bmi-calculator-six-tau.vercel.app/"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}2`]}
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="sliderItem">
                <img className="projectImage" src={Pokedex} alt="" />
                <div className="infoArea">
                  <div className="info">
                    {textIdioms.projectText[`${language}3`]}
                  </div>

                  <div className="linksArea">
                    <a
                      target="blank"
                      href="https://github.com/Venturini-Sales/pokedexAPI"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}1`]}
                      </button>
                    </a>
                    <a target="blank" href="https://pokedex-api-pi.vercel.app/">
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}2`]}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className="sliderResponsive">
            <Slider {...settings}>
              <div className="sliderItem">
                <img className="projectImage" src={Aerowave} alt="" />
                <div className="infoArea">
                  <div className="info">
                    {textIdioms.projectText[`${language}1`]}
                  </div>

                  <div className="linksArea">
                    <a
                      target="blank"
                      href="https://github.com/Venturini-Sales/AeroWave"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}1`]}
                      </button>
                    </a>
                    <a target="blank" href="https://aerowave-zeta.vercel.app/">
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}2`]}
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="sliderItem">
                <img className="projectImage" src={Bmi} alt="" />
                <div className="infoArea">
                  <div className="info">
                    {textIdioms.projectText[`${language}2`]}
                  </div>

                  <div className="linksArea">
                    <a
                      target="blank"
                      href="https://github.com/Venturini-Sales/BMICalculator"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}1`]}
                      </button>
                    </a>
                    <a
                      target="blank"
                      href="https://bmi-calculator-six-tau.vercel.app/"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}2`]}
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="sliderItem">
                <img className="projectImage" src={Pokedex} alt="" />
                <div className="infoArea">
                  <div className="info">
                    {textIdioms.projectText[`${language}3`]}
                  </div>

                  <div className="linksArea">
                    <a
                      target="blank"
                      href="https://github.com/Venturini-Sales/pokedexAPI"
                    >
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}1`]}
                      </button>
                    </a>
                    <a target="blank" href="https://pokedex-api-pi.vercel.app/">
                      <button className="button">
                        {miscellaneousIdioms.buttons[`${language}2`]}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
