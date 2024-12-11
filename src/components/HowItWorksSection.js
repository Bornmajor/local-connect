import React from 'react'
import appLogo from  '../assets/images/logo.png'
import StepperCard from './StepperCard'
import createAccImg from '../assets/images/register-icon.png'
import searchImg from '../assets/images/search-icon.png'
import growImg from '../assets/images/grow-icon.png'
import connectImg from '../assets/images/connect-icon.png'


const HowItWorksSection = () => {
  return (
    <div className='works-section'>

        <p className='section-sub-header my-2'>
        <img src={appLogo} width="35px"/>
         <span>GET STARTED</span>
         <img src={appLogo} width="35px"/>
        </p>
        
        <p className='section-header'>Four Steps to Connecting with<span className='text-primary'> Local Suppliers</span>  </p>

        <div className='stepper-section'>

        <StepperCard
        iconUrl={createAccImg}
        title="Create an account"
        desc="Sign up in minutes and gain access to our network of local suppliers."

        />

        <div className="step-line"></div>


        <StepperCard
        iconUrl={searchImg}
        title="Search Nearby Supplies"
        desc="Easily find local suppliers that meet your specific business needs."

        />

        <div className="step-line"></div>



        <StepperCard
        iconUrl={connectImg}
        title="Connect and Collaborate"
        desc="Connect directly with suppliers through our platform.."

        />

        <div className="step-line"></div>



        <StepperCard
        iconUrl={growImg}
        title="Grow Your Business"
        desc="Source materials efficiently, reduce costs, and expand your reach."

        />




        </div>   

      

   

    </div>
  )
}

export default HowItWorksSection