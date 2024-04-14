import React from 'react'
import Services from './Services'

const Repairs = ({services,plumber,cart,setCart}) => {


  return (
    <div className='container rounded mt-4 mb-3'>
        <div className='row ' style={{letterSpacing:"4px",textShadow:"0 0 3px rgb(0,0,0,0.4)"}}>
        <h1>{plumber}</h1>
        <h3>popular list</h3>
        </div>

        <div className='row bg-warning mt-4 shadow'> 
            <div className=' col bg-white text-warning p-1 m-1 h4'> 
                free conselting
            </div>
        </div>
        <div className='container row rounded bg-primary mt-5 text-center p-4'>

        <div className='row '>
            <div className='col h4 text-white p-2  border-bottom border-dark '>
                select based on services
            </div>
        </div>   
        {services.map((e)=> <Services ser={e} key={e.id} cart={cart} setCart={setCart}/>)}      
        
          
             </div>
      
     </div>
    
  )
}

export default Repairs
