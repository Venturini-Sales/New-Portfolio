import './Home.css'
import discord from '../../assets/icons/discord.png'
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion';

export const Home = () => {

    const [text] = useTypewriter({
        words: ['João Pedro Venturini Sales']
    });

    return (
        <>
        <div className='banner'>
        <motion.div initial={{ x: '-20vw', opacity: 0 }} animate={{ x: 0, opacity: 1}} transition={{ type: 'spring', stiffness: 25}}>
            <h1>Welcome to my Portfolio</h1>
        </motion.div>

        <motion.div initial={{ x: '20vw', opacity: 0 }} animate={{ x: 0, opacity: 1}} transition={{ type: 'spring', stiffness: 25}}>
            <h1>I'm a front-end developer</h1>
        </motion.div>
            <h1 className='type'>
                {text}
                <Cursor cursorStyle='|'/>
            </h1>

        </div>


        <div className='iconsArea'>
        <motion.div initial={{ x: '-20vw' }} animate={{ x: 0}} transition={{ type: 'spring', stiffness: 30}}>
        
        <div className='flexIcons'>
        <a target='blank' href="https://www.linkedin.com/in/jo%C3%A3o-pedro-venturini-sales-462600258/">
            <div className='icons'>
                <img className='icon' src={linkedin} alt="icon" />
            </div>
        </a>

        <a target='blank' href="https://github.com/Venturini-Sales">
            <div className='icons'>
                <img className='icon' src={github} alt="icon" />
            </div>  
        </a>

        <a target='blank' href="https://api.whatsapp.com/send?phone=5521978915683">
            <div className='icons'>
                <img className='icon' src={whatsapp} alt="icon" />
            </div>
        </a>

        <a target='blank' href="https://discord.com/users/457338766521139203">
            <div className='icons'>
                <img className='icon' src={discord} alt="icon" />
            </div>
        </a>
        </div>
        </motion.div>
        </div>

        <div className='scrollArea'>
        <motion.div initial={{ x: '20vw' }} animate={{ x: 0}} transition={{ type: 'spring', stiffness: 30}}>
        <div className='scroll'>
            Scroll Down
            <div class="c-infinite">
                    <span class="arrowAnimation">
                      <span class="animation">
                        <span>
                          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8333 13.9766L15.3033 9.50658L16.4816 10.6849L9.99998 17.1666L3.51831 10.6849L4.69664 9.50658L9.16664 13.9766V3.83325H10.8333V13.9766Z" fill="#ffffff"></path>
                          </svg>
                        </span>
                        <span class="animatedArrow">
                          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8333 13.9766L15.3033 9.50658L16.4816 10.6849L9.99998 17.1666L3.51831 10.6849L4.69664 9.50658L9.16664 13.9766V3.83325H10.8333V13.9766Z" fill="#ffffff"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
        </div>
        </motion.div>
        </div>
        </>
    )

}
