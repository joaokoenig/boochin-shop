import React from 'react';
import "./Card.scss"
import {Link} from "react-router-dom";
import { SpaRounded } from '@mui/icons-material';

const Card = ({item})=>{
    return(
        <Link className='link' to={`/product/${item.id}`}>
            <div className='card'>
                <div className="image">
                    {item.isExclusive ? <span>Exclusive Collection</span> : <span>Token Available</span>}
                    <img src={item.img} alt="" className="mainImg" />
                    <img src={item.img2} alt="" className="secondImage" />
                </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
        
    )
}

export default Card;