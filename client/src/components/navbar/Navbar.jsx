import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./nav.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                    <img src="/images/english-lang.jpeg" alt="" width={20}/>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className="link" to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/2">Man</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/3">Children</Link>
                </div>
            </div>
            <div className='center'>
                <Link className="link" to="/">BOOCHIN</Link>
            </div>
            <div className='right'>
                <div className='item'>
                    <Link className="link" to="/">Homepage</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/">About</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/transfer">Transfer</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/cashback">Get Cashback</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderIcon/>
                    <div className="cartIcon">
                        <ShoppingCartIcon/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar