import React, { useState } from 'react'
import './Product.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';



const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/5886042/pexels-photo-5886042.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/5119526/pexels-photo-5119526.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$129,80</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nulla sequi modi voluptas illo dolores iste, repellendus consectetur saepe pariatur neque ut! Voluptatibus dolorum id beatae expedita reiciendis aliquid. Consequatur.</p>
        <div className='quantity'>
          <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='addButton'>
        <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;