import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../card/Card'


const FeaturedProducts = ({type}) => {
    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isExclusive: true,
            title:"example 1",
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isExclusive: false,
            title: "example 2",
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isExclusive: true,
            title: "example 3",
            oldPrice:21,
            price:13,
        }
    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type}</h1>
            <p className={'featuredDescription'}>Welcome to our unique collection! Items labeled 'Exclusive Collection' require the burning of tokens for purchase. On the other hand, products tagged 'Token Available' provide you with a token upon purchase.</p>
        </div>
        <div className="bottom">
            {data.map(item =>(
                <Card item={item} key={item.id}/> 
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts
