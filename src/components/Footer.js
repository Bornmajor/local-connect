import React, { useContext }  from 'react'
import appLogo from  '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import MyContext from '../context/context'

const Footer = () => {

  const {contextHolder,successFeedback} = useContext(MyContext);

  const submitForm = (e) =>{
    e.preventDefault()
    successFeedback('Successfully subscribed!!')
  }

  return (
    <div className='footer'>
      {contextHolder}

        <div className='inner-container'>

          <div className='logo-section'>
            <img src={appLogo} className='app-img' />
            <p className='logo-title'>Local <span className='text-primary'>content</span></p>

        </div>

        <div className='app-motto'>
        "Bridging Small Businesses and Trusted Suppliers for Seamless Connections,
         Smarter Sourcing, and Greater Success."
        </div>  

        <div className='social-icons'>

        <i class="fab fa-facebook-square icon"></i>
        <i class="fab fa-linkedin icon"></i>
        <i class="fab fa-instagram-square icon"></i>
        <i class="fab fa-whatsapp-square icon"></i>

        </div>



        </div>

        <div className='inner-container'>

            <p className='title'>Company</p>

            <div className='links-container'>

                <Link className='link' to="/#demo-section">Demo</Link>
                <Link className='link' to="/#pricing-section">Pricing</Link>
                <Link className='link' to="/#testimony-section">Testimonial</Link>
              
                <Link className='link' to="/#contact-section">Contact Us</Link>

            </div>

        </div>


        
        <div className='inner-container'>

            <p className='title '>Contact</p>

            <div className='links-container'>

            <p className='contact-info'>+254 726 710 303</p>
            <p className='contact-info'>contactus@localconnect.com</p>
            <p className='contact-info'>Newbustand Road, near Vellan Cafe, in Thanjavur</p>
              

            </div>

        </div>

        <div className='inner-container'>

        <p className='title '>Subscribe to our newsletter</p>  

        <form class="input-group mb-3" onSubmit={submitForm }>
        <input type="text" 
        className="form-control"
        placeholder="Email address" 
        aria-label="Email address" 
        aria-describedby="button-addon2" 
        required
        />
        <button class="btn btn-secondary" type="submit" id="button-addon2">
            Send
        </button>
        </form>

        </div>

        

        

    </div>
  )
}

export default Footer