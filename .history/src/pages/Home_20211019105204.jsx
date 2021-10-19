import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Gird from '../components/Grid'
import ProductCard from '../components/ProductCard'

import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

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
            mdCol={2}
            smCol={1}
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
      {/* best selling section */}
      <Section>
        <SectionTitle>
          Top sản phẩm bán chạy trong tuần
        </SectionTitle>
        <SectionBody>
          <Gird
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            
          </Gird>
        </SectionBody>
      </Section>
      {/* end best selling section */}
    </Helmet>
  )
}

export default Home
