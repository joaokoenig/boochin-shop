import React from 'react'
import "./Home.scss"
import Slider from '../../components/slider/Slider';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home;