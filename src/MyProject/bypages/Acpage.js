import React from 'react'
import MenuBar from '../MenuBar'
import RepairList from '../plumber/RepairList'
import Repairs from '../plumber/Repairs'
import Order from '../Order'
import PlumberTechDetails from '../plumber/PlumberTechDetails'
 import ac from "../image/acimages/ac.jfif"
import acservice from "../image/acimages/acservice.jfif"
import gas from "../image/acimages/gas.jfif"
import rust from "../image/acimages/rust.jfif"
import window from "../image/acimages/window.jfif"
import split from "../image/acimages/split.jfif"

const Acpage = ({cart,setCart}) => {
    const services =[
        {
            name:"installation services",
        btn:"select",
        id:1,
        list:true,
        price:0
    },
        {
            name:"ac cleaning",
        btn:"select",
        id:2,
        list:true,
        price:0
    },
        {name:"ac dealers",
        btn:"select",
        id:3,
        list:true,
        price:0
},
        {name:" generals services",
        btn:"select",
        id:4,
        list:true,
        price:0
    }

    ]

    const fault =  [
        {
            id:1,
            name:" AC service",
            src:acservice,
            price:599,
            btn:"select"
        },
        {
            id:2,
            name:"rust cleaning",
            src:rust,
            price:666,
            btn:"select"
        },
        {
            id:3,
            name:"split repair",
            src:split,
            price:199,
            btn:"select"
        },
        
        {
            id:4,
            name:"window repair",
            src:window,
            price:199,
            btn:"select"
        },
        {
            id:5,
            name:" gas (refil/fix)",
            src:gas,
            price:199,
            btn:"select"
        },
        {
            id:6,
            name:"AC install",
            src:ac,
            price: 699,
            btn:"select"
        },
        {
            id:7,
            name:"AC uninstall",
            src:ac,
            price:399,
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
      const actech = 'AC Technician'
  return (
    <div className='container'>
    <MenuBar cart={cart} />
    <Repairs services={services} plumber={actech} cart={cart} setCart={setCart}/>
    <div className='col-12 border border-3 border-dark mt-5 p-2 bg-white text-danger h1 sticky-top' style={{letterSpacing:"4px",textShadow:"0 0 3px rgb(0,0,0,0.4)"}}>
 by separate faults
</div>
    <div className='row'>
        {fault.map((e)=>(
        <div key={e.id} className=' col-md-3 col-sm-4 col-4 mb-4 text-center'>
             <RepairList fault = {e} cart={cart} setCart={setCart}/>
</div>
))}

        </div>
        <Order/>
        <PlumberTechDetails details={details}/>
</div>
  )
}

export default Acpage
