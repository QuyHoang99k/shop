import React from 'react'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'


const Catalog = () => {
  return (
    <Helmet title="Sản Phẩm">
      <div className="catalog">
        <div className="catalog__filter"></div>
        <div className="catalog__content"></div>
      </div>
     
    </Helmet>
  )
}

export default Catalog
