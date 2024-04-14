import React from 'react'
import CommanRepairPage from '../CommanRepairPage'
 import mason from "../image/mason/download.jfif"
import femalesub from "../image/mason/femalesub.jfif"
import submale from "../image/mason/submale.jfif"
import helper from "../image/mason/helper.jfif"
import loadlifter from "../image/mason/loadlifter.jfif"

const Mason = ({cart,setCart}) => {

const services =[
    {
    name:"labour contractors",
    btn:"select",
    id:1,
    list:true,
    price:0
},
    {
    name:"tiles labours",
    btn:"select",
    id:2,
    list:true,
    price:0
},
    {name:"painter labours",
    btn:"select",
    id:3,
    list:true,
    price:0
} 
]
const fault =  [
    {
        id:1,
        name:" mason",
        src:mason,
        price:1200,
        btn:"select"
    },
    {
        id:2,
        name:"sub mason male",
        src:submale,
        price: 900,
        btn:"select"
    },
    {
        id:3,
        name: "sub mason female",
        src:femalesub,
        price: 700,
        btn:"select"
    },
    {
        id:4,
        name:"load shifter",
        src:loadlifter,
        price: 1100,
        btn:"select"
    },
    {
        id:5,
        name:" helper ",
        src:helper,
        price: 500,
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
    <CommanRepairPage  cart={cart} setCart={setCart} services={services} fault={fault} details={details} work={"civil mason"}/ >

  )
}

export default Mason
