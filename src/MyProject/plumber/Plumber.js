import React from 'react'
import Repairs from './Repairs'
import Order from '../Order'
import MenuBar from '../MenuBar'
import PlumberTechDetails from './PlumberTechDetails'
import Problems from './Problems'
 
 
const Plumber = ({cart,setCart}) => {
  const plumber = "plumber"
  const services =[
    {name:"installation services",
    btn:"select",
    id:1,
    list:true,
    price:0
},
    {
        name:"plumbing contractors",
    btn:"select",
    id:2,
    list:true,
    price:0
},
    {name:" products",
    btn:"select",
    id:3,
    list:true,
    price:0
},
    {name:" generals",
    btn:"select",
    id:4,
    list:true,
    price:0
}

]
const details = [
  {
      id:1,
      name:"santhosh",
      catogery:"plumber",
      location:"perambur",
      complitions:200,
      rate:4.4
  },
  {
      id:2,
      name:"santhosh",
      catogery:"plumber",
      location:"perambur",
      complitions:200,
      rate:4.4
  },
  {
      id:3,
      name:"santhosh",
      catogery:"plumber",
      location:"perambur",
      complitions:200,
      rate:4.4
  },
  {
      id:4,
      name:"santhosh",
      catogery:"plumber",
      location:"perambur",
      complitions:200,
      rate:4.4
  },
  {
      id:5,
      name:"santhosh",
      catogery:"plumber",
      location:"perambur",
      complitions:200,
      rate:4.4
  },
  {
      id:6,
      name:"santhosh",
      catogery:"plumber",
      location:"perambur",
      complitions:200,
      rate:4.4
  },

]
   return (
    <div>
      
     
      <MenuBar cart={cart}/>
      <Repairs services={services} plumber={plumber} cart={cart} setCart={setCart}/>
       
      <Problems cart={cart} setCart={setCart}/>
      <PlumberTechDetails details={details}/> 
      <Order/>
    </div>
  )
}

export default Plumber
