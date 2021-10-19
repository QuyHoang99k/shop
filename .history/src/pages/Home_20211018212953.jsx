import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section {SectionBody,} from '../components/Section'

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

      </Section>
      {/* end policy section */}
    </Helmet>
  )
}

export default Home
