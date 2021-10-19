import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, {SectionBody,SectionTitle} from '../components/Section'
import PolicyCard from '../components/PolicyCard'

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* slider */}
        <HeroSlider data={heroSliderData}
        control={true}
        // auto={true}
        timeOut={5000}
        />
        
      {/* end slider */}
      {/* policy section */}
      <Section>
        <SectionBody>
          
        </SectionBody>
      </Section>
      {/* end policy section */}
    </Helmet>
  )
}

export default Home
