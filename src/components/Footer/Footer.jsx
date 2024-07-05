import './Footer.css'

export const Footer = () => {
    return (
        
        <div className='footer'>

            <div className='footerText'>
                Created by João Pedro Venturini Sales.
            </div>


            <div>
            <label htmlFor='language' className="switch">
                <input type="checkbox" id='language'></input>
                <span className="inputSlider"></span>
            </label>
            </div>

        </div>
     
    )
}