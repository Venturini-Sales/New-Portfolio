import './Contact.css'
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/context';
import { sectionsIdioms, miscellaneousIdioms } from '../../data/language';
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export const Contact = () => {

    const { language } = useContext(LanguageContext);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const alert = miscellaneousIdioms.popUp[`${language}1`];
    const confirmation =  miscellaneousIdioms.popUp[`${language}2`];

    function sendEmail(e){
        e.preventDefault(); 
      
        if (name === '' || email === '' || message === '' ){
          toast.warning(alert)
          return;
        }
      
        const templateParams = {
            from_name: name,
          message: message,
          email: email  
        }
      
        emailjs.send("service_e8i4ric", "template_5epny0i", templateParams, "YWSfj3h8senTL6N1j")
        .then((response) => {
          toast.success(confirmation, response.status, response.text)
          setName("")
          setEmail("")
          setMessage("")
        }, (err) => {
          toast.error("Error:", err)
        })
      }

    return (
    <div className='contact'>
        <motion.div viewport={{ once: true, amount: 0.4 }}  initial={{ x: '-20vw', opacity: 0 }} whileInView={{ x: 0, opacity: 1}} transition={{ type: 'spring', stiffness: 25} }>
        <div className='centralContent'>

            <h1>{sectionsIdioms.contact[language]}</h1>

            <form onSubmit={sendEmail}>

            <div className='contactForm'>

                <div>

                    <div className="formInput">
                        <label htmlFor="name" className="text">{miscellaneousIdioms.inputs[`${language}1`]}</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} autoComplete='off' type="text" placeholder={miscellaneousIdioms.inputs[`${language}4`]} name="name" id='name' className="input"></input>
                    </div>

                    <div className="formInput">
                        <label htmlFor="email" className="text">{miscellaneousIdioms.inputs[`${language}2`]}</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email}  autoComplete='off' type="text" placeholder={miscellaneousIdioms.inputs[`${language}4`]} name="email" id='email' className="input"></input>
                    </div>

                    <button className='button'>{miscellaneousIdioms.buttons[`${language}3`]}</button>

                </div>

                <div>

                    <div className="formInput">
                        <label htmlFor="message" className="text">{miscellaneousIdioms.inputs[`${language}3`]}</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} autoComplete='off' type="textArea" placeholder={miscellaneousIdioms.inputs[`${language}4`]}  name="message" id='message' className="input"></textarea>
                    </div>


                </div>


            </div>

            <div className='contactFormResponsive'>

            <div>

                <div className="formInput">
                    <label htmlFor="name" className="text">{miscellaneousIdioms.inputs[`${language}1`]}</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} autoComplete='off' type="text" placeholder={miscellaneousIdioms.inputs[`${language}4`]}  name="name" id='name' className="input"></input>
                </div>

                <div className="formInput">
                    <label htmlFor="email" className="text">{miscellaneousIdioms.inputs[`${language}2`]}</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} autoComplete='off' type="text" placeholder={miscellaneousIdioms.inputs[`${language}4`]}  name="email" id='email' className="input"></input>
                </div>

            </div>

            <div className='directionInput'>

                <div className="formInput">
                    <label htmlFor="message" className="text">{miscellaneousIdioms.inputs[`${language}1`]}</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} autoComplete='off' type="textArea" placeholder={miscellaneousIdioms.inputs[`${language}4`]}  name="message" id='message' className="input"></textarea>
                </div>
                
                <button className='button'>{miscellaneousIdioms.buttons[`${language}3`]}</button>

            </div>


            </div>
            
            </form>
        </div>
        </motion.div>
    </div>
    )
}