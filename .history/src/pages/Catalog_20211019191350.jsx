import React from 'react'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'


const Catalog = () => {
  return (
    <Helmet title="Sản Phẩm">
      <div className="catalog">
        <div className="catalog__filter"></div>
        <div className="catalog__content">
          <Grid
            col={3}
            mdCol={2}
            smCol={1}
            gap={20}
          >


          </Grid>

        </div>
      </div>
     
    </Helmet>
  )
}

export default Catalog
