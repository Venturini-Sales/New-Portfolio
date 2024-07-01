import { useState } from 'react'
import { motion } from 'framer-motion';
import './Header.css'

export const Header = () => {
    const [navBar, setNavBar] = useState(false);

    const backgroundChange = () => {
        if(window.scrollY >= 590) {
            setNavBar(true)
        } else {
            setNavBar(false) 
    }};

    window.addEventListener('scroll', backgroundChange);

    return (
      
        <header className={navBar ? 'navBar active' : 'navBar'}>
        <motion.div initial={{ y: '-20vh' }} animate={{ y: 0}} transition={{ type: 'spring', stiffness: 30}}>
        <div className="header">

            <div className="logo">
                <h1>
                    &lt;/João Pedro V. Sales&gt;
                </h1>
            </div>

            <div className="menu">
                <nav>
                    <ul>    
                        <li><a href="">Home</a></li>
                        <li><a href="">About Me</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </div>

        </div>
        </motion.div>

        </header>
     
    )
}