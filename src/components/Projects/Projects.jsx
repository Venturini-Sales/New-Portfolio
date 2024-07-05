import './Projects.css'
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aerowave from '../../assets/images/Aerowave.png'
import Pokedex from '../../assets/images/Pokedex.png'
import Bmi from '../../assets/images/BMI.png'

export const Projects = () => {

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

        <div className='projects'>
            <motion.div viewport={{ once: true, amount: 0.4 }}  initial={{ x: '20vw', opacity: 0 }} whileInView={{ x: 0, opacity: 1}} transition={{ type: 'spring', stiffness: 25} } >
            <div className='centralContent'>
                <h1>Projects</h1>

                <div className='slider'>
                <Slider {...settings}>
                    
                    <div className='sliderItem'>

                    <img className='projectImage' src={Aerowave} alt="" />
                        <div className='infoArea'>

                        <div className='info'>AeroWave is an e-commerce project focused on selling vinyl records, built with the React library. Inspired by the styles of Frutiger Aero and Vaporwave from the 90s, the project aims to provide a modern and functional shopping experience. It incorporates features such as componentization, pagination, CSS animations, and integration with React Toastify for enhanced navigation. This project stands out for its technical and aesthetic approach, representing a practical example of developing dynamic and interactive interfaces.</div>
                        
                        <div className='linksArea'>
                            <a target='blank' href="https://github.com/Venturini-Sales/AeroWave">  
                            <button className='button'>Repository</button>
                            </a>
                            <a target='blank' href="https://aerowave-zeta.vercel.app/">
                            <button className='button'>Deploy</button> 
                            </a>
                        </div>

                        </div>
                    </div>

                    <div className='sliderItem'>
                    <img className='projectImage' src={Bmi} alt="" />
                        <div className='infoArea'>

                        <div className='info'>The project at hand is a Body Mass Index (BMI) Calculator built using the React library. The interface has been thoughtfully designed to provide an intuitive user experience, allowing for easy BMI calculations. The results are dynamically displayed with color-coded indicators for categories such as 'Underweight,'' 'Normal,' 'Overweight,' and 'Obese' based on the calculated values. Additionally, the application employs the Toastify library to deliver clear notifications in cases of invalid data input. With a responsive design, the project ensures a consistent experience across different devices, underscoring the emphasis on usability and efficient application design.</div>
                        
                        <div className='linksArea'>
                            <a target='blank' href="https://github.com/Venturini-Sales/BMICalculator">  
                            <button className='button'>Repository</button>
                            </a>
                            <a target='blank' href="https://bmi-calculator-six-tau.vercel.app/">
                            <button className='button'>Deploy</button> 
                            </a>
                        </div>

                        </div>
                    </div>

                    <div className='sliderItem'>
                    <img className='projectImage' src={Pokedex} alt="" />
                        <div className='infoArea'>

                        <div className='info'>This project entails the development of a Pokédex using the React library, integrating the PokeAPI to retrieve essential data such as names, identifiers, and Pokémon sprites. Additionally, the application incorporates Toastify for notifications, enhancing the interactive user experience. The choice of React ensures a responsive and modular interface, easing code organization, while the integration with the PokeAPI guarantees a reliable source of information. The inclusion of Toastify contributes to a more dynamic user experience, allowing visual and informative notifications during interactions with the Pokédex.</div>

                        <div className='linksArea'>
                            <a target='blank' href="https://github.com/Venturini-Sales/pokedexAPI">  
                            <button className='button'>Repository</button>
                            </a>
                            <a target='blank' href="https://pokedex-api-pi.vercel.app/">
                            <button className='button'>Deploy</button> 
                            </a>
                        </div>

                        </div>
                    </div>


                </Slider>
                </div>

                <div className='sliderResponsive'>
                <Slider {...settings}>
                    
                    <div className='sliderItem'>
                    <img className='projectImage' src={Aerowave} alt="" />
                        <div className='infoArea'>

                        <div className='info'>AeroWave is an e-commerce project focused on selling vinyl records, built with the React library. Inspired by the styles of Frutiger Aero and Vaporwave from the 90s, the project aims to provide a modern and functional shopping experience. It incorporates features such as componentization, pagination, CSS animations, and integration with React Toastify for enhanced navigation. This project stands out for its technical and aesthetic approach, representing a practical example of developing dynamic and interactive interfaces.</div>
                        
                        <div className='linksArea'>
                            <a target='blank' href="https://github.com/Venturini-Sales/AeroWave">  
                            <button className='button'>Repository</button>
                            </a>
                            <a target='blank' href="https://aerowave-zeta.vercel.app/">
                            <button className='button'>Deploy</button> 
                            </a>
                        </div>

                        </div>
                    </div>

                    <div className='sliderItem'>
                    <img className='projectImage' src={Bmi} alt="" />
                        <div className='infoArea'>

                        <div className='info'>The project at hand is a Body Mass Index (BMI) Calculator built using the React library. The interface has been thoughtfully designed to provide an intuitive user experience, allowing for easy BMI calculations. The results are dynamically displayed with color-coded indicators for categories such as 'Underweight,'' 'Normal,' 'Overweight,' and 'Obese' based on the calculated values. Additionally, the application employs the Toastify library to deliver clear notifications in cases of invalid data input. With a responsive design, the project ensures a consistent experience across different devices, underscoring the emphasis on usability and efficient application design.</div>
                        
                        <div className='linksArea'>
                            <a target='blank' href="https://github.com/Venturini-Sales/BMICalculator">  
                            <button className='button'>Repository</button>
                            </a>
                            <a target='blank' href="https://bmi-calculator-six-tau.vercel.app/">
                            <button className='button'>Deploy</button> 
                            </a>
                        </div>

                        </div>
                    </div>

                    <div className='sliderItem'>
                    <img className='projectImage' src={Pokedex} alt="" />
                        <div className='infoArea'>

                        <div className='info'>This project entails the development of a Pokédex using the React library, integrating the PokeAPI to retrieve essential data such as names, identifiers, and Pokémon sprites. Additionally, the application incorporates Toastify for notifications, enhancing the interactive user experience. The choice of React ensures a responsive and modular interface, easing code organization, while the integration with the PokeAPI guarantees a reliable source of information. The inclusion of Toastify contributes to a more dynamic user experience, allowing visual and informative notifications during interactions with the Pokédex.</div>

                        <div className='linksArea'>
                            <a target='blank' href="https://github.com/Venturini-Sales/pokedexAPI">  
                            <button className='button'>Repository</button>
                            </a>
                            <a target='blank' href="https://pokedex-api-pi.vercel.app/">
                            <button className='button'>Deploy</button> 
                            </a>
                        </div>

                        </div>
                    </div>

                </Slider>
                </div>



            </div>
            </motion.div>
        </div>

    )
}