import React, { useContext } from 'react'
import appLogo from  '../assets/images/logo.png'
import MyContext from '../context/context'


const ContactSection = () => {

  const {contextHolder,successFeedback} = useContext(MyContext)


  const submitForm = (e) =>{
    e.preventDefault()
    successFeedback('Message successfully sent!!')

  }

  return (
    <div className='contact-section' id="contact-section">
      {contextHolder}

        <form className='form-setup' onSubmit={submitForm}>

          <div className='smallviewport'>

          <p className='section-sub-header my-2'>
        <img src={appLogo} width="35px"/>
         <span>CONTACT US</span>
         <img src={appLogo} width="35px"/>
        </p>
        
        <p className='section-header'>Let's Start a <span className='text-primary'>Conversation</span>  </p>


          </div>

     <div className='name-email-setup'>

      <div class="mb-3 name ">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
    </div>

      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
    </div>  

     </div>

     <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Subject</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
    </div>

    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
    </div>
       

     
    <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        <div className='contact-address'>

        <p className='section-sub-header my-2'>
        <img src={appLogo} width="35px"/>
         <span>CONTACT US</span>
         <img src={appLogo} width="35px"/>
        </p>
        
        <p className='section-header'>Let's Start a <span className='text-primary'>Conversation</span>  </p>

        
         
         <div className='contact-infos mt-3'>
        <p className=''>
        Note: <span className='text-secondary ' style={{fontStyle:'italic'}}>We guarantee a response to your emails and calls within 5 business hours.</span> 
        </p>

         <p className='telephone'>
            <i class="fas fa-phone-alt"></i> +254 726 710 303
         </p>

         <p className='email'>
         <i class="fas fa-envelope"></i> contactus@localconnect.com
         </p>


         <p className='location'>
         <i class="fas fa-map-marker-alt"></i> We located in Newbustand Road, near Vellan Cafe, in Thanjavur
         </p>


         </div>

       



        </div>

        
    </div>
  )
}

export default ContactSection