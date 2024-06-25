import { useState } from 'react'
import './Header.css'

export const Header = () => {
    const [navBar, setNavBar] = useState(false);

    const backgroundChange = () => {
        if(window.scrollY >= 620) {
            setNavBar(true)
        } else {
            setNavBar(false) 
    }};

    window.addEventListener('scroll', backgroundChange);

    return (
      
        <header className={navBar ? 'navBar active' : 'navBar'}>

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

        </header>
     
    )
}