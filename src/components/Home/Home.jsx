import './Home.css'
import discord from '../../assets/icons/discord.png'
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export const Home = () => {

    const [text] = useTypewriter({
        words: ['João Pedro Venturini Sales']
    });

    return (
        <>
        <div className='banner'>
            <h1>Welcome to my Portfolio</h1>
            <h1>I'm a front-end developer</h1>
            <h1 className='type'>
                {text}
                <Cursor cursorStyle='|'/>
            </h1>

        </div>

        <div className='iconsArea'>

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
        </>
    )

}
