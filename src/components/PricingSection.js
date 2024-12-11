import React from 'react'
import appLogo from  '../assets/images/logo.png'
import PricingCard from './PricingCard'

const PricingSection = () => {
 
  return (
    <div className='pricing-section' id="pricing-section">

<p className='section-sub-header my-2'>
        <img src={appLogo} width="35px"/>
         <span>PRICING PLANS</span>
         <img src={appLogo} width="35px"/>
        </p>
        
        <p className='section-header'>Find the Perfect Plan  <span className='text-primary'>for Your Business</span>  </p>

        <div className='package-container'>

            <PricingCard
            title="Basic Package"
            subtitle="Small businesses looking to get started"
            price="Free"
            isPopular={false}

            >
            <p><i className="fas fa-check-circle feature-icon" ></i> Access to verified suppliers. </p>    
            <p><i className="fas fa-check-circle feature-icon"></i> Product showcasing (limited to 10 listings). </p> 
            <p><i className="fas fa-check-circle feature-icon"></i> Real-time chat with suppliers (limited to 3 chats per day). </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Interactive map for local supplier discovery. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Analytics dashboard with basic insights. </p>  
              
            

            </PricingCard>

            <PricingCard
            title="Standard Package"
            subtitle="Small to medium-sized businesses with growing needs"
            price="Ksh 800/month"
            isPopular={true}

            >
            <p><i className="fas fa-check-circle feature-icon" ></i> Everything in the Basic Package, plus:. </p>    
            <p><i className="fas fa-check-circle feature-icon"></i> Unlimited real-time chat with suppliers. </p> 
            <p><i className="fas fa-check-circle feature-icon"></i> Advanced analytics dashboard with detailed insights. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Payment gateway integration for seamless transactions. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Product showcasing with up to 50 listings. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Priority customer support. </p>  
            

            </PricingCard>

            <PricingCard
            title="Enterprise Package"
            subtitle="Large companies and corporations"
            price="Ksh 1500/month"
            isPopular={false}

            >
            <p><i className="fas fa-check-circle feature-icon" ></i> Everything in the Standard Package, plus: </p>    
            <p><i className="fas fa-check-circle feature-icon"></i> Unlimited product showcasing. </p> 
            <p><i className="fas fa-check-circle feature-icon"></i> API access for system integration. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Team accounts for multi-user access. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Custom analytics reports tailored to business needs. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Dedicated account manager for personalized support. </p> 
             
            

            </PricingCard>
            
        </div>   

        <div className='horizontal-scrollable'>

        <PricingCard
            title="Basic Package"
            subtitle="Small businesses looking to get started"
            price="Free"
            isPopular={false}

            >
            <p><i className="fas fa-check-circle feature-icon" ></i> Access to verified suppliers. </p>    
            <p><i className="fas fa-check-circle feature-icon"></i> Product showcasing (limited to 10 listings). </p> 
            <p><i className="fas fa-check-circle feature-icon"></i> Real-time chat with suppliers (limited to 3 chats per day). </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Interactive map for local supplier discovery. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Analytics dashboard with basic insights. </p>  
              
            

            </PricingCard>

            <PricingCard
            title="Standard Package"
            subtitle="Small to medium-sized businesses with growing needs"
            price="Ksh 800/month"
            isPopular={true}

            >
            <p><i className="fas fa-check-circle feature-icon" ></i> Everything in the Basic Package, plus:. </p>    
            <p><i className="fas fa-check-circle feature-icon"></i> Unlimited real-time chat with suppliers. </p> 
            <p><i className="fas fa-check-circle feature-icon"></i> Advanced analytics dashboard with detailed insights. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Payment gateway integration for seamless transactions. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Product showcasing with up to 50 listings. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Priority customer support. </p>  
            

            </PricingCard>

            <PricingCard
            title="Enterprise Package"
            subtitle="Large companies and corporations"
            price="Ksh 1500/month"
            isPopular={false}

            >
            <p><i className="fas fa-check-circle feature-icon" ></i> Everything in the Standard Package, plus: </p>    
            <p><i className="fas fa-check-circle feature-icon"></i> Unlimited product showcasing. </p> 
            <p><i className="fas fa-check-circle feature-icon"></i> API access for system integration. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Team accounts for multi-user access. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Custom analytics reports tailored to business needs. </p>  
            <p><i className="fas fa-check-circle feature-icon"></i> Dedicated account manager for personalized support. </p> 
             
            

            </PricingCard>

          
          </div>     
        
    </div>
  )
}

export default PricingSection