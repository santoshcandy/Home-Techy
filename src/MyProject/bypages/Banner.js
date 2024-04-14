import React from 'react'
import tap from '../image/plumberimages/tap.jpg'
import CommanRepairPage from '../CommanRepairPage'
const Banner = ({cart , setCart}) => {
    const services =[
        {
        name:"street banner",
        btn:"select",
        id:1,
        list:true,
        price:0
    },
        {
        name:"shop banner",
        btn:"select",
        id:2,
        list:true,
        price:0
    },
        {name:"retail banner",
        btn:"select",
        id:3,
        list:true,
        price:0
    } ,
    {name:"function banners",
    btn:"select",
    id:4,
    list:true,
    price:0
} 
    ]
    const fault =  [
        {
            id:1,
            name:"size: 10x10",
            src:tap,
            price:999,
            btn:"select"
        },
        {
            id:2,
            name:"size: 10x15",
            src:tap,
            price: 1099,
            btn:"select"
        },
        {
            id:3,
            name: "size : 10x20",
            src:tap,
            price: 1299,
            btn:"select"
        },
        {
            id:4,
            name:"size : 15x20",
            src:tap,
            price: 1399,
            btn:"select"
        },
        {
            id:5,
            name:" size : 20x20 ",
            src:tap,
            price: 1499,
            btn:"select"
        }  
    ]
    const details = [
        {
            id:1,
            name:"santhosh",
            catogery:"electricain",
            location:"perambur",
            complitions:200,
            rate:4.4
        },
        {
            id:2,
            name:"parthiban",
            catogery:"electricain",
            location:"perambur",
            complitions:200,
            rate:4.4
        },
        {
            id:3,
            name:"surendhar",
            catogery:"electricain",
            location:"perambur",
            complitions:200,
            rate:4.4
        },
        {
            id:4,
            name:"dinesh",
            catogery:"electricain",
            location:"perambur",
            complitions:200,
            rate:4.4
        },
        {
            id:5,
            name:"harish",
            catogery:"electricain",
            location:"perambur",
            complitions:200,
            rate:4.4
        },
        {
            id:6,
            name:"dhana",
            catogery:"electricain",
            location:"perambur",
            complitions:200,
            rate:4.4
        },
      
    ]
    
  return (
    <CommanRepairPage  cart={cart} setCart={setCart} services={services} fault={fault} details={details} work={"banners"}/ >

  )
}

export default Banner
