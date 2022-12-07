import React from 'react'
import Product from '../components/Product'
import FooterBanner from '../components/FooterBanner'
import HeroBanner from '../components/HeroBanner'
import {client} from '../lib/client'

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speackers of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map(product => <Product product={product} key={product._id}/>)}
      </div>

      <FooterBanner footerBanner = {bannerData && bannerData[0]}/>
    </> 
   
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData}
  }
}

export default Home
