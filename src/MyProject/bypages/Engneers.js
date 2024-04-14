import React from 'react'
import CommanRepairPage from '../CommanRepairPage'


const Engneers = ({cart,setCart}) => {
    const services =[
        {
        name:" civil engneers",
        btn:"select",
        id:1,
        list:true,
        price:0
    },
        {
        name:"architecture's",
        btn:"select",
        id:2,
        list:true,
        price:0
    },
        {name:"designeers",
        btn:"select",
        id:3,
        list:true,
        price:0
    } ,
    {name:"electrical engneers",
    btn:"select",
    id:4,
    list:true,
    price:0
} 
    ]
    const fault =  [
        
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
    <CommanRepairPage  cart={cart} setCart={setCart} services={services} fault={fault} details={details} work={"engnears"}/ >
)
}

export default Engneers
