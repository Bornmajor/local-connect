import React from 'react'
import HeroSection from '../components/HeroSection'
import BenefitsSection from '../components/BenefitsSection'
import FeatureSection from '../components/FeatureSection'
import HowItWorksSection from '../components/HowItWorksSection'
import TestimonialSection from '../components/TestimonialSection'
import PricingSection from '../components/PricingSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import DemoSection from '../components/DemoSection'

const Home = () => {
  return (
    <div className='main-container'>
       
       <HeroSection />
       <BenefitsSection />
       <FeatureSection />
       <HowItWorksSection />
       <TestimonialSection />
       <PricingSection />
       <ContactSection />
       <DemoSection />
       <Footer />
       
   </div>
  )
}

export default Home