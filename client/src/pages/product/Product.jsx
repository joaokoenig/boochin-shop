import React, { useState } from 'react'
import './Product.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';



const Product = () => {
  const catId = parseInt(useParams().id)
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tokenBurned, setTokenBurned] = useState(false);

  const images = [
    "https://images.pexels.com/photos/5886042/pexels-photo-5886042.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/5119526/pexels-photo-5119526.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]

  function burnToken() {
    //TODO implementar burn token
    setTokenBurned(true);
  }

  function transferToken() {
    //TODO implementar função que transfer token quando comprando (mint_with_barcode)
    //exibir mensagem ou alerta, algo do tipo, informando
    //usar barcode hardcoded
  }

  const makeBuyButton = () => {
    if(catId === 2) {
      //case tokens
      return (
        <button className='addButton' onClick={() => transferToken()}>
          <AddShoppingCartIcon/> BUY NOW
        </button>
      )
    }
    //case exclusive collecion
    return (
        <div>
        {(!tokenBurned) ?
            <div>
              <button className='addButton exclusiveCollectionDisabled'>
                <AddShoppingCartIcon/> BUY NOW
              </button>
              <p>To be able to buy this item you should burn a single token</p>
              <button className='addButton' onClick={() => burnToken()}>
                BURN IT!
              </button>
            </div>
            :
            <div>
              <button className='addButton'>
                <AddShoppingCartIcon/> BUY NOW
              </button>
              <p>Token burned with success. Be happy!</p>
            </div>
        }
        </div>
    )
  }

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
        {makeBuyButton()}
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