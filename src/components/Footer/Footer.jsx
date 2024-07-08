import './Footer.css'
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/context';
import { miscellaneousIdioms } from '../../data/language';

export const Footer = () => {
    const { toggleLanguage } = useContext(LanguageContext);
    const { language } = useContext(LanguageContext);

    return (
        
        <div className='footer'>

            <div className='footerText'>
            {miscellaneousIdioms.create[language]} João Pedro Venturini Sales.
            </div>


            <div>
            <label htmlFor='language' className="switch">
                <input type="checkbox" id='language' onClick={toggleLanguage}></input>
                <span className="inputSlider"></span>
            </label>
            </div>

        </div>
     
    )
}