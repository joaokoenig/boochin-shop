import React from 'react'
import "./Home.scss"
import Slider from '../../components/slider/Slider';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Categories from '../../components/categories/Categories';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home;