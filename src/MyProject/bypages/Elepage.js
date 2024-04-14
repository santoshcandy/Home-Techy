import React from 'react'
// import ele from '../imagenumber1.jpg'
import RepairList from '../plumber/RepairList'
import MenuBar from '../MenuBar'
import Order from '../Order'
import bulb from '../image/eleimages/bulb.jpg'
import boremotor from '../image/eleimages/boremotor.jpg'
import dbfault from '../image/eleimages/dbfault.jpg'
import fan from '../image/eleimages/fan.jpg'
import mcvb from '../image/eleimages/mcvb.jpg'
import  pallight from '../image/eleimages/pallight.jpg'
import sharp from '../image/eleimages/sharp.jpg'
import socket from '../image/eleimages/socket.jpg'
import sub from '../image/eleimages/sub.jpg'
import switchs from '../image/eleimages/switch.jpg'
import wering from '../image/eleimages/wering.jpg'
import db from '../image/eleimages/db.jpg'
import PlumberTechDetails from '../plumber/PlumberTechDetails'
 import Repairs from '../plumber/Repairs'
import ss from "../image/eleimages/sscombined.jfif"
import acbox from "../image/eleimages/ac.jfif"
import inverter from "../image/eleimages/inverter.jfif"

const Elepage = ({cart,setCart}) => {
    const services =[
        {name:"installation services",
        btn:"select",
        id:1,
        list:true,
        price:0
    },
        {
            name:"elecrical contractors",
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
    const fault = [
        {
            id:1,
            name:"switch",
            src:switchs,
            price:149,
            btn:"select"
        },
        {
            id:2,
            name:"socket",
            src:socket,
            price:219,
            btn:"select"
        },
        {
            id:3,
            name:"wering p/1m",
            src:wering,
            price: 299,
            btn:"select"
        },
        {
            id:4,
            name:"bulb 4no",
            src:bulb,
            price:249,
            btn:"select"
        },
        {
            id:5,
            name:"cealing light",
            src:pallight,
            price:179,
            btn:"select"
        },
        {
            id:6,
            name:" bore motor",
            src:boremotor,
            price:1399,
            btn:"select"
        },
        {
            id:7,
            name:"sharp motor",
            src:sharp,
            price:899,
            btn:"select"
        },
        {
            id:8,
            name:"submerssible",
            src:sub,
            price:4449,
            btn:"select"
        },
        {
            id:9,
            name:"db board",
            src:db,
            price:599,
            btn:"select"
        },
        {
            id:10,
            name:"db repair",
            src:dbfault,
            price:449,
            btn:"select"
        },{
            id:11,
            name:"breaker",
            src:mcvb,
            price:449,
            btn:"select"
        },
        {
            id:12,
            name:"fan",
            src:fan,
            price:299,
            btn:"select"
        },
        {
            id:13,
            name:"inverter",
            src:inverter,
            price:1099,
            btn:"select"
        },
        {
            id:14,
            name:"AC-box",
            src:acbox,
            price:999,
            btn:"select"
        },
        
        {
            id:15,
            name:"SS-box",
            src:ss,
            price:999,
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
    <div className='container'>
        <MenuBar cart={cart} />
        <Repairs services={services} plumber={'electrician'} cart={cart} setCart={setCart}/>
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

export default Elepage
