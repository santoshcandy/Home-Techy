
import React from 'react'
import MenuBar from './MenuBar'
import Repairs from './plumber/Repairs'
import RepairList from './plumber/RepairList'
import Order from './Order'
import PlumberTechDetails from './plumber/PlumberTechDetails'

const CommanRepairPage = ({cart,setCart,services,fault,details,work}) => {
  return (
    <div>
        <div className='container'>
    <MenuBar cart={cart} />
    <Repairs services={services}  plumber={work} cart={cart} setCart={setCart}/>
    <div className='col-12 border border-3 border-dark mt-5 p-2 bg-white text-danger h1 sticky-top' style={{letterSpacing:"4px",textShadow:"0 0 3px rgb(0,0,0,0.4)"}}>
 by separate faults
</div>
    <div className='row'>

        {
         
        fault==''? <span className='text-center my-5 text-white bg-danger h3 p-2' style={{width:"500px" , height:"auto",margin:"auto", border:"3px solid yellow",borderRadius:"20px 50px"}}>there is no separate works please book consultations</span>:fault.map((e)=>(
        <div key={e.id} className=' col-md-3 col-sm-4 col-4 mb-4 text-center'>
           <RepairList fault = {e} cart={cart} setCart={setCart}/>
</div>
))}

        </div>
        <Order/>
        <PlumberTechDetails details={details}/>
</div>
    </div>
  )
}

export default CommanRepairPage
