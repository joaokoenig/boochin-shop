import React from 'react'
import "./Home.scss"
import Slider from '../../components/slider/Slider';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Contact/>
    </div>
  )
}

export default Home;