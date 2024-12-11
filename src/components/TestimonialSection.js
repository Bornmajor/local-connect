import React from 'react'
import appLogo from  '../assets/images/logo.png'
import TestimonyCard from './TestimonyCard'
import user1 from '../assets/images/user1.jpg'
import user2 from '../assets/images/user2.jpg'
import user3 from '../assets/images/user3.jpg'
import user4 from '../assets/images/user4.jpg'
import user5 from '../assets/images/user5.jpg'

const TestimonialSection = () => {
  return (
    <div className='testimony-section' id="testimony-section">

       <p className='section-sub-header my-2'>
        <img src={appLogo} width="35px"/>
         <span>SUCCESS STORIES</span>
         <img src={appLogo} width="35px"/>
        </p>
        
        <p className='section-header'>Don't Just Take <span className='text-primary'>Our Word For It</span>  </p>

     <div className='horizontal-scrollable'>

        <TestimonyCard 
        imgUrl={user1}
        testimony="This platform has been a game-changer for my shop. I found local suppliers.."
              
        />

        <TestimonyCard 
        imgUrl={user2}
        testimony="As a supplier, this app has expanded my reach to small businesses I wouldn’t.."   
        />

        <TestimonyCard 
        imgUrl={user3}
        testimony="Starting out, it was hard to find trustworthy suppliers. This app made the.."   
        />

        <TestimonyCard 
        imgUrl={user4}
        testimony="I run a restaurant, and sourcing fresh ingredients quickly is critical With this app.."   
        />

        <TestimonyCard 
        imgUrl={user5}
        testimony="This platform bridges the gap between small businesses and suppliers. The analytics dashboard.."   
        />



     </div>
        
    </div>
  )
}

export default TestimonialSection