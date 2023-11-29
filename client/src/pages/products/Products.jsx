import React from 'react'
import "./Products.scss"

const Products = () => {
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1} />
            <label htmlFor="1">Hats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1} />
            <label htmlFor="1">Shirt</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" />
            <span>1000</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value={'asc'} name='price'/>
            <label htmlFor="asc">Price (Low to high)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value={'desc'} name='price'/>
            <label htmlFor="desc">Price (High to low)</label>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Products;