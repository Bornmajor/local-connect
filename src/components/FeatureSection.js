import React, { useEffect } from 'react'
import FeatureCard from './FeatureCard'
import verifiedImg from '../assets/images/Verified-pana.png'
import mapImg  from '../assets/images/Paper map-cuate.png'
import chatImg from '../assets/images/Messages-cuate.png'
import paymentImg from '../assets/images/Online transactions-amico.png'
import ecommerceImg from '../assets/images/Ecommerce web page-bro.png'
import dashboardImg from '../assets/images/Setup Analytics-pana.png'
import appLogo from  '../assets/images/logo.png'


const FeatureSection = () => {
  useEffect(()=>{

    const scrollableDiv = document.getElementById("feature-scrollable");
  
  // Adjust the horizontal scroll position
  const scrollDistance = 80; // Distance in pixels to scroll
  scrollableDiv.scrollLeft = scrollDistance;

  },[])

  return (
    <div className='features-section' id="features-section">

         <p className='section-sub-header my-2'>
            <img src={appLogo} width="35px"/>
            <span>OUR FEATURES</span>
            <img src={appLogo} width="35px"/>
            </p>
        <p className='section-header'>Powerful Features to Simplify <span className='text-primary'>Your Business Connections</span>  </p>

        <div className='inline-container'>

          <FeatureCard iconUrl={verifiedImg} title="Verified Suppliers" desc="Connect with thoroughly vetted suppliers to ensure quality, reliability, and trust in every transaction." />  
          <FeatureCard iconUrl={mapImg} title="Interactive Map" desc="Explore an easy-to-navigate map to find and connect with local suppliers based on their proximity to your business." />  
          <FeatureCard iconUrl={chatImg} title="Realtime Chat" desc="Engage in instant communication with suppliers to ask questions, negotiate deals, and build relationships seamlessly."/>  

        </div>

        <div className='inline-container'>

        <FeatureCard iconUrl={paymentImg} title="Payment Gateway" desc="Make secure and hassle-free payments directly on the platform, ensuring smooth and protected transactions."/>  
        <FeatureCard iconUrl={ecommerceImg} title="Product Showcasing" desc="Browse detailed product listings from suppliers, complete with images, descriptions, and pricing for informed decision-making."/>  
        <FeatureCard iconUrl={dashboardImg} title="Analytics Dashboard" desc="Access real-time data and insights to monitor sourcing activities, track spending, and optimize supplier partnerships."/>  

        </div>

        <div className='horizontal-scrollable' id="feature-scrollable">

        <FeatureCard iconUrl={verifiedImg} title="Verified Suppliers" desc="Connect with thoroughly vetted suppliers to ensure quality, reliability, and trust in every transaction." />  
          <FeatureCard iconUrl={mapImg} title="Interactive Map" desc="Explore an easy-to-navigate map to find and connect with local suppliers based on their proximity to your business." />  
          <FeatureCard iconUrl={chatImg} title="Realtime Chat" desc="Engage in instant communication with suppliers to ask questions, negotiate deals, and build relationships seamlessly."/>  
          <FeatureCard iconUrl={paymentImg} title="Payment Gateway" desc="Make secure and hassle-free payments directly on the platform, ensuring smooth and protected transactions."/>  
        <FeatureCard iconUrl={ecommerceImg} title="Product Showcasing" desc="Browse detailed product listings from suppliers, complete with images, descriptions, and pricing for informed decision-making."/>  
        <FeatureCard iconUrl={dashboardImg} title="Analytics Dashboard" desc="Access real-time data and insights to monitor sourcing activities, track spending, and optimize supplier partnerships."/>  


        </div>

        

        
    </div>
  )
}

export default FeatureSection