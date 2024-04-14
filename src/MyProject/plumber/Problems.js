import React, { useState } from 'react'
 import connection from "../image/plumberimages/connection.jpg"
import diverter from "../image/plumberimages/diverter.jpg"
import  flushvalve from "../image/plumberimages/flushvalve.jpg"
import inc from "../image/plumberimages/inc.jpg"
import leakage from "../image/plumberimages/leakage.jpg"
import seatcover from "../image/plumberimages/seatcover.jpg"
import shower from "../image/plumberimages/shower.jpg"
import tap from "../image/plumberimages/tap.jpg"
import  wallmountedwc from "../image/plumberimages/wall-mounted-wc.jpg"
import  washbasin from "../image/plumberimages/washbasin.jpg"
import  watertank from "../image/plumberimages/watertank.jpg"
import  wctr from "../image/plumberimages/wctr.jpg"
import  wc from "../image/plumberimages/wc.jpg"
import   tapfitting from "../image/plumberimages/tapfitting.jpg"
import   wctank from "../image/plumberimages/wc-tank.jpg"
import RepairList from './RepairList'
const fault = [
    {
        id:1,
        name:"nozzle",
        src:tap,
        price:149,
        btn:"select"
    },
    {
        id:2,
        name:"tap fitting",
        src:tapfitting,
        price:219,
        btn:"select"
    },
    {
        id:3,
        name:" tap leakage",
        src:leakage,
        price:199,
        btn:"select"
    },
    {
        id:4,
        name:"shower",
        src:shower,
        price:199,
        btn:"select"
    },
    {
        id:5,
        name:"conation hoce",
        src:connection,
        price:179,
        btn:"select"
    },
    {
        id:6,
        name:"wall-mounted wc",
        src:wallmountedwc,
        price:1399,
        btn:"select"
    },
    {
        id:7,
        name:" indian-closet",
        src:inc,
        price:1399,
        btn:"select"
    },
    {
        id:8,
        name:"wash-basin",
        src:washbasin,
        price:349,
        btn:"select"
    },
    {
        id:9,
        name:" wc-seat-cover",
        src:seatcover,
        price:299,
        btn:"select"
    },
    {
        id:10,
        name:" wc-tank-repair",
        src:wctr,
        price:349,
        btn:"select"
    },{
        id:11,
        name:"wc-rank-replace",
        src:wctank,
        price:449,
        btn:"select"
    },
    {
        id:12,
        name:" diverter",
        src:diverter,
        price:1199,
        btn:"select"
    },
    {
        id:13,
        name:" flush-valve",
        src:flushvalve,
        price:1099,
        btn:"select"
    },
    {
        id:14,
        name:" over-head-tank",
        src:watertank,
        price:999,
        btn:"select"
    },
    
    {
        id:15,
        name:"WC",
        src:wc,
        price:999,
        btn:"select"
    }

]
 
const Problems = ({cart,setCart}) => {

const [faults] = useState(fault)
  

  return (
    <div className='container'>
    <div className='col-12 border border-3 border-dark mt-5 p-2 bg-white text-danger h1' style={{letterSpacing:"4px",textShadow:"0 0 3px rgb(0,0,0,0.4)"}}>
     by separate faults
    </div>
    {/* <div className='row '>
      {faults.map(e=><div className=' col col-md-3 col-sm-4  mb-4' key={e.id}>
            <img src={e.src} className='img' alt='plumber'/>
            <div className='h5 name'>{e.name}.</div>
            <div className='h6'>RS.<span className='price'>{e.price}</span>/-</div>

                <button className='btn btn-warning' onClick={addAction} >{e.btn}</button>

      </div>)}

    </div> */}
    <div className='row'>

        {faults.map((e)=>(
            <div key={e.id} className=' col-md-3 col-sm-4 col-4 mb-4 ms-0  text-center' style={{margin:"auto"}}>
                 <RepairList fault = {e} cart={cart} setCart={setCart}/>
    </div>
))}  
    </div>

 </div>
  )
}

export default Problems
