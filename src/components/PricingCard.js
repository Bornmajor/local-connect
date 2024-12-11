import React, { useContext } from 'react'
import MyContext from '../context/context'

const PricingCard = ({children,title,subtitle,price,isPopular}) => {
  const {toggleModal} = useContext(MyContext);
  return (
    <div className='pricing-card' style={{border:isPopular ? '2px solid #025cde' :''}} >

        {isPopular && 
        <p className='header-bar'>
          Most popular 
         </p>
            }

        <div className='inner-container'>

           <p className='title my-2'>{title}</p>

       
        <p className='subtitle my-2'>{subtitle}</p>

        <p className='pricing my-2'>{price}</p>

        <button className='btn btn-primary mb-2 w-100' onClick={toggleModal}>GET STARTED</button>
       
       <p className='feature-title mt-3'>Features</p>
       <div className='features mt-2'>
        {children}
       </div>   
        </div>
        
      
        
    </div>
  )
}

export default PricingCard