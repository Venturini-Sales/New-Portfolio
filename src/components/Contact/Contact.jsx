import './Contact.css'
import { motion } from 'framer-motion'

export const Contact = () => {
    return (
    <div className='contact'>
        <motion.div viewport={{ once: true, amount: 0.4 }}  initial={{ x: '-20vw', opacity: 0 }} whileInView={{ x: 0, opacity: 1}} transition={{ type: 'spring', stiffness: 25} }>
        <div className='centralContent'>

            <h1>Contact</h1>

            <form className='contactForm'>

                <div>

                    <div className="formInput">
                        <label htmlFor="name" className="text">Name</label>
                        <input autoComplete='off' type="text" placeholder="Write here..." name="name" id='name' className="input"></input>
                    </div>

                    <div className="formInput">
                        <label htmlFor="email" className="text">Email</label>
                        <input autoComplete='off' type="text" placeholder="Write here..." name="email" id='email' className="input"></input>
                    </div>

                    <button className='button'>Send</button>

                </div>

                <div>

                    <div className="formInput">
                        <label htmlFor="message" className="text">Message</label>
                        <textarea autoComplete='off' type="textArea" placeholder="Write here..." name="message" id='message' className="input"></textarea>
                    </div>


                </div>


            </form>

        </div>
        </motion.div>
    </div>
    )
}