import React, { useContext } from 'react'
import coverImg from '../assets/images/background2.png'
import appLogo from  '../assets/images/logo.png'
import MyContext from '../context/context'


const DemoSection = () => {
  const {contextHolder,errorFeedback} = useContext(MyContext);

  return (
    <div className='demo-section' id="demo-section">
    {contextHolder}
        
<p className='section-sub-header my-2'>
            <img src={appLogo} width="35px"/>
            <span>REQUEST DEMO</span>
            <img src={appLogo} width="35px"/>
            </p>
<p className='section-header'>See How LocalConnect Can Benefit <span className='text-primary'>Your Business</span>  </p>



        <div className='inner-container'>

         <img src={coverImg} className='cover-img' />  

         <div className='content'>

            <p className='title'>Experience the Power of Smart Sourcing</p>

            <p className='description'>
                Get a firsthand look at how our platform connects businesses and suppliers seamlessly. 
                Request a demo today and discover the features designed to help your business grow.
            </p>

            <button className='btn btn-primary' onClick={()=> errorFeedback('Demo unavailable')}>Request a Demo</button>

         </div>


        </div>

       




        
    </div>
  )
}

export default DemoSection