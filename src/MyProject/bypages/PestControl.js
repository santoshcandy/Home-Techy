import React from 'react'
import CommanRepairPage from '../CommanRepairPage'
import tap from "../image/plumberimages/tap.jpg"

const PestControl = ({cart,setCart}) => {

 const services =[
        {
        name:"cockroach",
        btn:"select",
        id:1,
        list:true,
        price:0
    },
        {
        name:"ant & general",
        btn:"select",
        id:2,
        list:true,
        price:0
    },
        {name:"kitchen & bathroom",
        btn:"select",
        id:3,
        list:true,
        price:0
},
        {name:"home control",
        btn:"select",
        id:4,
        list:true,
        price:0
    },
    {name:"offices pest control",
    btn:"select",
    id:5,
    list:true,
    price:0
    },
    {name:"shops pest control",
    btn:"select",
    id:6,
    list:true,
    price:0
    }

    ]
const fault =  [
        {
            id:1,
            name:"bathroom utensil removel",
            src:tap,
            price:1499,
            btn:"select"
        },
        {
            id:2,
            name:"kitchen utensil removel",
            src:tap,
            price: 1599,
            btn:"select"
        },
        {
            id:3,
            name: "bathroon",
            src:tap,
            price: 799,
            btn:"select"
        },
        {
            id:4,
            name:"kitchen",
            src:tap,
            price: 699,
            btn:"select"
        },
        {
            id:5,
            name:" apartment ",
            src:tap,
            price: 999,
            btn:"select"
        },
        {
            id:6,
            name:"utensils removel",
            src:tap,
            price:199,
            btn:"select"
        } ,
        {
            id:7,
            name:"offices pest control",
            src:tap,
            price:1499,
            btn:"select"
        } ,
        {
            id:8,
            name:"retails pest control",
            src:tap,
            price:1499,
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
    <CommanRepairPage  cart={cart} setCart={setCart} services={services} fault={fault} details={details} work={"pest control"}/ >

  )
}

export default PestControl
