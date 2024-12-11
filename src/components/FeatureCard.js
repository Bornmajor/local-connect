import React from 'react'

const FeatureCard = ({iconUrl,title,desc}) => {
  return (
    <div className='feature-card'>

        <img src={iconUrl} className='feature-img' />
        <p className='title'>{title}</p>
        <p className='desc text-muted'>{desc}</p>
        
    </div>
  )
}

export default FeatureCard