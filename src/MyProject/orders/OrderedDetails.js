import React, { useContext, useEffect  } from 'react'
import Selected from './Selected'
import MenuBar from '../MenuBar'
import SignUp from '../SignUp'
import { Pro } from '../LinksCheack'
 
const OrderedDetails = ({cart,setCart,name,setName,number,setNumber,counter,setCounter}) => {
const {total,setTotal} = useContext(Pro)

useEffect(
  ()=>{
    setTotal(cart.reduce((a,b)=> a+ parseInt(b.price),0))
  },
  [cart]
)

  return (
    <div className='container'>
      <MenuBar cart={cart}/>
       <div className='row'>

        <div className='col-md-6 col-sm-12 border-end border-dark border-1'> 
        <div className='col h4 border-bottom border-dark border-2 my-4'>
           selected services 
            <span className='bg-primary mx-3 h5 rounded-4 text-light px-1'>
              {cart.length} 
              </span>
        </div>
          <div>
            <Selected cart={cart} setCart={setCart} counter={counter} setCounter={setCounter}/>
          </div>

        </div>


      <div className='col-md-6 col-sm-12'>

        <div className='col h4 border-bottom border-dark border-2 my-4'>
          Ordered Details
        </div>
        <div>
          <span className='h5 mx-3'> total price  :</span>
          <span className='h6 mx-3'> RS.{total} /-</span>
        <br></br>
        <SignUp total={total} cart={cart} name={name} setName={setName} number={number} setNumber={setNumber}/>
         </div>
          {/* <div className='col bg-primary text-light p-1 my-5 h6 rounded-4' style={{letterSpacing:"4px",textShadow:"0 0 2px white , 0 0 5px white ,0 0 10px black"}} > CONFIRM</div> */}
      
      </div>
    </div>
      </div>
      
  )
}

export default OrderedDetails
