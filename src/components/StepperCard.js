import React from 'react'

const StepperCard = ({iconUrl,title,desc}) => {
  return (
    <div className='stepper-process-card'>

      
         <img src={iconUrl} className='stepper-process-img'/>   
    
        

        <p className='title'>{title}</p>
        <p className='desc'>{desc}</p>

        
    </div>
  )
}

export default StepperCard