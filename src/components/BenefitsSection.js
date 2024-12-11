import React from 'react'
import costSavingImg from '../assets/images/icons8-savings-90.png'
import fastImg from '../assets/images/icons8-fast-96.png'
import marketImg from '../assets/images/icons8-market-96.png'

const BenefitsSection = () => {
  return (
    <div className='benefits-section'>

        <div className='benefit'>
            <img src={costSavingImg} />
            <span>
            <p className='title'>Cost saving</p>
            <p className='description'>Reduce costs with direct access to local suppliers.</p>   
            </span>
          
        </div>

        <div className='benefit'>
        <img src={fastImg} />
        <span>
             <p className='title'>Fast sourcing</p>
            <p className='description'>Find reliable suppliers quickly.</p>   
        </span>
        
        </div>


        <div className='benefit'>
        <img src={marketImg} />
        <span>
          <p className='title'>Free for small businesses</p>
        <p className='description'> Small businesses can join at no cost.</p>   
        </span>

        </div>
        
    </div>
  )
}

export default BenefitsSection