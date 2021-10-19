import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Gird from '../components/Grid'

import policy from '../assets/fake-data/policy'
import { Link } from 'react-router-dom'

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
          <Gird
            col={4}
            mdcol={2}
            smcol={1}
            gap={20}
          >
            {
              policy.map((item, index) => <Link to="/policy">
                <PolicyCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>)
            }
          </Gird>
        </SectionBody>
      </Section>
      {/* end policy section */}
    </Helmet>
  )
}

export default Home
