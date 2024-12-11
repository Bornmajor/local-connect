import React from 'react'

const TestimonyCard = ({testimony,imgUrl}) => {
  return (
    <div className='testimony-card'>
        <img src={imgUrl} className='testimony-img' />

        <div className='content'>
         <p className='desc'>{testimony}</p>
        <button className='btn btn-primary my-4'>Read More <i class="fas fa-external-link-alt"></i></button>   
        </div>
        
        
    </div>
  )
}

export default TestimonyCard