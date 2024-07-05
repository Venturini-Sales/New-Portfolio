import './Contact.css'
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault(); 
      
        if (name === '' || email === '' || message === '' ){
          toast.warning("Fill in all the fields.")
          return;
        }
      
        const templateParams = {
            from_name: name,
          message: message,
          email: email  
        }
      
        emailjs.send("service_e8i4ric", "template_5epny0i", templateParams, "YWSfj3h8senTL6N1j")
        .then((response) => {
          toast.success("Email Sent", response.status, response.text)
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

            <h1>Contact</h1>

            <form onSubmit={sendEmail}>

            <div className='contactForm'>

                <div>

                    <div className="formInput">
                        <label htmlFor="name" className="text">Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} autoComplete='off' type="text" placeholder="Write here..." name="name" id='name' className="input"></input>
                    </div>

                    <div className="formInput">
                        <label htmlFor="email" className="text">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email}  autoComplete='off' type="text" placeholder="Write here..." name="email" id='email' className="input"></input>
                    </div>

                    <button className='button'>Send</button>

                </div>

                <div>

                    <div className="formInput">
                        <label htmlFor="message" className="text">Message</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} autoComplete='off' type="textArea" placeholder="Write here..." name="message" id='message' className="input"></textarea>
                    </div>


                </div>


            </div>

            <div className='contactFormResponsive'>

            <div>

                <div className="formInput">
                    <label htmlFor="name" className="text">Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} autoComplete='off' type="text" placeholder="Write here..." name="name" id='name' className="input"></input>
                </div>

                <div className="formInput">
                    <label htmlFor="email" className="text">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} autoComplete='off' type="text" placeholder="Write here..." name="email" id='email' className="input"></input>
                </div>

            </div>

            <div className='directionInput'>

                <div className="formInput">
                    <label htmlFor="message" className="text">Message</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} autoComplete='off' type="textArea" placeholder="Write here..." name="message" id='message' className="input"></textarea>
                </div>
                
                <button className='button'>Send</button>

            </div>


            </div>
            
            </form>
        </div>
        </motion.div>
    </div>
    )
}