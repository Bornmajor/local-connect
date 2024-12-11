import React, { useContext } from 'react'
import coverImg from '../assets/images/background1.png'
import { Link } from 'react-router-dom'
import MyContext from '../context/context'

const HeroSection = () => {
const {toggleModal} = useContext(MyContext);
  return (
    <div className='hero-section'>
        

        <div className='text-content'>

            <p className='main-header'>Empower Your Business <span className='text-primary'> with Local Connections</span></p>

            <p className='sub-header my-3'>
                Find reliable local suppliers for all your business needs.
                 Our platform connects you with businesses in your area, 
                 making it easy to source materials, services, and more.
           </p>

          <div className='action-btns'>
           <button className='btn btn-primary my-3' onClick={toggleModal}>Explore More</button>  
           <Link className='mx-3' to="/#features-section">View All features</Link>
          </div>
          

        </div>

        <img src={coverImg} className='cover-img'  />
        
    </div>
  )
}

export default HeroSection