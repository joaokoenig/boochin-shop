import React from 'react'
import "./List.scss"
import Card from '../card/Card'

const List = () => {

    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title:"example 1",
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: false,
            title: "example 2",
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title: "example 3",
            oldPrice:21,
            price:13,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title:"example 1",
            oldPrice:19,
            price:12,
        },
        {
            id:5,
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: false,
            title: "example 2",
            oldPrice:19,
            price:12,
        },
        {
            id:6,
            img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title: "example 3",
            oldPrice:21,
            price:13,
        },
        {
            id:7,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title:"example 1",
            oldPrice:19,
            price:12,
        },
        {
            id:8,
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: false,
            title: "example 2",
            oldPrice:19,
            price:12,
        },
        {
            id:9,
            img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title: "example 3",
            oldPrice:21,
            price:13,
        }
    ]

  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List