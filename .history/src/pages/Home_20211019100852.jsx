import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, {SectionBody,SectionTitle} from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Gird from ''

import policy from '../assets/fake-data/policy'

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
            {
              policy.map((item,index)=> <PolicyCard
                key={index}
                name={item.name}
                description={item.description}
                icon={item.icon}
              />)
            }
        </SectionBody>
      </Section>
      {/* end policy section */}
    </Helmet>
  )
}

export default Home
